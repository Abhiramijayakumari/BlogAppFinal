const mongoose = require("mongoose");
//Write missing code here
mongoose.connect("mongodb+srv://Abhirami:anjujaya4@cluster0.idqsrck.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
