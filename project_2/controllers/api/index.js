const { Router } = require("express");
const Record = require("../../models/records");

const router = Router();

router.get("/records", async (req, res) => {
  try {
    await Record.find({}, (error, records) => {
      res.json(records);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
