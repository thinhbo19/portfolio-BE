const Comment = require("./model");
const asyncHandler = require("express-async-handler");

const createComment = asyncHandler(async (req, res) => {
  try {
    const { name, subtitle, comment } = req.body;
    let image;
    if (req.file) {
      image = req.file.path;
    }
    const newComment = new Comment({
      image,
      name,
      subtitle,
      comment,
    });
    await newComment.save();
    return res.status(200).json({
      success: true,
      mess: "Comment successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      mess: "Failure!",
      error: error.message,
    });
  }
});
const getComment = asyncHandler(async (req, res) => {
  try {
    const comlist = await Comment.find();
    return res.status(200).json({
      success: true,
      comlist,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createComment,
  getComment,
};
