const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var commentSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  comment: {
    type: String,
  },
});

//Export the model
module.exports = mongoose.model("Comment", commentSchema);
