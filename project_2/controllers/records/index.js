// Dependencies
const { Router } = require("express");
const Record = require("../../models/records");
const auth = require("../../controllers/authmiddleware");

const router = Router();

let id = undefined;

// Routes

//Index
router.get("/", async (req, res) => {
  try {
    await Record.find({}, (error, records) => {
      if (req.session.userId) {
        id = req.session.userId;
      }
      res.render("record/index", {
        records: records,
        id: id,
      });
    });
  } catch (error) {
    console.log(error);
  }
});
//Seed Data
router.get("/seed", async (req, res) => {
  try {
    await Record.create(recordsSeed, (error, createdRecords) => {
      res.send(createdRecords);
    });
  } catch (error) {
    console.log(error);
  }
});
//New
router.get("/new", auth, (req, res) => {
  if (req.session.userId) {
    id = req.session.userId;
  }
  res.render("record/new", {
    id: id,
  });
});
//Destroy
router.delete("/:id", auth, async (req, res) => {
  try {
    await Record.findByIdAndDelete(req.params.id, (error, foundRecord) => {
      res.redirect("/");
    });
  } catch {
    console.log(error);
  }
});
//Update
router.put("/edit/:id", auth, async (req, res) => {
  try {
    req.body.username = req.session.username;
    await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      (error, updatedRecord) => {
        res.redirect(`/records/${req.params.id}`);
      }
    );
  } catch (error) {
    console.log(error);
  }
});
//Create
router.post("/new", async (req, res) => {
  try {
    req.body.username = req.session.username;
    await Record.create(req.body);
    res.redirect("/records");
  } catch (error) {
    console.log(error);
  }
});
//Edit
router.get("/edit/:id", auth, async (req, res) => {
  try {
    await Record.findById(req.params.id, (error, foundRecord) => {
      res.render("record/edit", {
        record: foundRecord,
        id: id,
      });
    });
  } catch (error) {
    console.log(error);
  }
});
//Show
router.get("/:id", async (req, res) => {
  try {
    await Record.findById(req.params.id, (error, foundRecord) => {
      res.render("record/show", {
        record: foundRecord,
        id: id,
      });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
