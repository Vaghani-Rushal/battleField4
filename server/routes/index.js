const express = require("express");
const router = express.Router();
const Schema = require("../helper/schema");
const Validators = require("../helper/validation");

const listController = require("../controllers/listController");

router.post(
  "/list",
  Validators.forReqBody(Schema.listSchame),
  listController?.addToList
);
router.get("/all-list", listController?.fetchLists);
router.get(
  "/list/:id",
  Validators.forParams(Schema.params),
  listController?.fetchOne
);

module.exports = router;
