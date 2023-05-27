const { Router } = require("express");
const { commentController } = require("../controllers/Comment.controller");


const router = Router();

router.get("/comment", commentController.getComment);
router.post("/comment/add", commentController.createComment);
router.delete("/comment/:id", commentController.deleteComment);
// router.delete("/comment/:id", commentController.deleteComment);


module.exports = router;