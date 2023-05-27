const { Router } = require("express");
const { genryController } = require("../controllers/Genry.controller");

const router = Router();
router.get("/genry", genryController.getGenry);

router.post("/genry", genryController.createGenry);

router.delete("/genry/:id", genryController.deleteGenry);
  

module.exports = router;