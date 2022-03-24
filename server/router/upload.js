const Router = require("express").Router;
const router = new Router();
const { cloudinary } = require("../service/cloudinary");
const upload = require("../service/multer");
const authMiddleware = require("../middlewares/auth-middleware");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result);
    return res.json(result);
  } catch (err) {
    console.log(err);
  }
});
router.delete("/:public_id", async (req, res) => {
  try {
    console.log(req.params.public_id);
    const deleted = await cloudinary.uploader.destroy(req.params.public_id);
    console.log(deleted);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
