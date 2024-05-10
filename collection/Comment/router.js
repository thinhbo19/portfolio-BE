const router = require("express").Router();
const comControler = require("./controler");
const uploadCloud = require("../../middleware/uploadimg");

router.post("/create", uploadCloud.single("image"), comControler.createComment);
router.get("/", comControler.getComment);

module.exports = router;
