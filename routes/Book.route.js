const { Router } = require("express");
const { bookController } = require("../controllers/Book.controller");

const router = Router();
router.get("/book", bookController.getBook);

router.get("/book/genry", bookController.getBookFromGenry);

router.get("/book/:id", bookController.getBookId);

router.post("/book", bookController.createBook);

router.delete("/book/:id", bookController.deleteBook);
  
router.patch("/book/:id", bookController.editBook);

module.exports = router;