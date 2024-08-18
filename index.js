const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
const BlogModel = require('./Model');

app.post("/add", async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const newBlog = new BlogModel(req.body);
    const result = await newBlog.save();
    res.status(201).send({ message: "Blog added", data: result });
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).send({ message: "Failed to add blog", error: error.message });
  }
});
app.put("/update/:id", async (req, res) => {
  try {
    const blogid = req.params.id;
    const updatedData = req.body;

    const updatedBlog = await BlogModel.findByIdAndUpdate(blogid, updatedData, {
      new: true,
    });

    if (!updatedBlog) {
      return res.status(404).send({ message: "Employee not found" });
    }

    res.status(200).send(updatedBlog);
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).send({ message: "Error updating employee", error: error.message });
  }
});
app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
