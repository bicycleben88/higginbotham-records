// Dependencies
const { Router } = require("express");
const Record = require("../../models/records");
const auth = require("../../controllers/authmiddleware");

const router = Router();

let id = undefined;

// const recordsSeed = [
//   {
//     username: "Ben",
//     albumArtwork: "https://i.imgur.com/G5ZKi59.jpg",
//     artist: "Kanye West",
//     albumTitle: "My Beautiful Dark Twisted Fantasy",
//     genre: "Rap",
//     releaseDate: "November 22, 2010",
//   },
//   {
//     username: "Ben",
//     albumArtwork: "https://i.imgur.com/XawT8R5.jpg",
//     artist: "Dolly Parton",
//     albumTitle: "My Tennessee Mountain Home",
//     genre: "Country",
//     releaseDate: "April 2, 1973",
//   },
//   {
//     username: "Ben",
//     albumArtwork: "https://i.imgur.com/uiUHi7c.png",
//     artist: "Billie Eilish",
//     albumTitle: "When We All Fall Asleep, Where Do We Go?",
//     genre: "Pop",
//     releaseDate: "March 29, 2019",
//   },
//   {
//     username: "Ben",
//     albumArtwork: "https://i.imgur.com/PKYY8RC.jpg",
//     artist: "Kendrick Lamar",
//     albumTitle: "To Pimp a Butterfly",
//     genre: "Rap",
//     releaseDate: "March 15, 2015",
//   },
//   {
//     username: "Ben",
//     albumArtwork: "https://i.imgur.com/VFFDRWT.jpg",
//     artist: "Willie Nelson",
//     albumTitle: "Always On My Mind",
//     genre: "Country",
//     releaseDate: "February 1982",
//   },
//   {
//     username: "Ben",
//     albumArtwork: "https://i.imgur.com/45ArSqv.jpg",
//     artist: "John Prine",
//     albumTitle: "John Prine",
//     genre: "Country",
//     releaseDate: "1971",
//   },
//   {
//     username: "Ben",
//     albumArtwork: "https://i.imgur.com/cOlpofX.jpg",
//     artist: "Daft Punk",
//     albumTitle: "Random Access Memories",
//     genre: "Electronic",
//     releaseDate: "May 17, 2013",
//   },
//   {
//     username: "Ben",
//     albumArtwork: "https://i.imgur.com/HkKdlEH.jpg",
//     artist: "Girl Talk",
//     albumTitle: "Night Ripper",
//     genre: "Electronic",
//     releaseDate: "May 9, 2006",
//   },
//   {
//     username: "Ben",
//     albumArtwork: "https://i.imgur.com/HCzm74u.jpg",
//     artist: "The Cramps",
//     albumTitle: "Big Beat from Badsville",
//     genre: "Punk",
//     releaseDate: "May 1997",
//   },
//   {
//     username: "Ben",
//     albumArtwork: "https://i.imgur.com/y2ehezv.jpg",
//     artist: "Rob Zombie",
//     albumTitle: "Hellbilly Deluxe",
//     genre: "Rock",
//     releaseDate: "August 25, 1998",
//   },
//   {
//     username: "Ben",
//     albumArtwork: "https://i.imgur.com/F26PHi3.jpg",
//     artist: "Louis Armstrong",
//     albumTitle: "Louis and the Good Book",
//     genre: "Jazz",
//     releaseDate: "June 1, 1958",
//   },
//   {
//     username: "Ben",
//     albumArtwork: "https://i.imgur.com/OnBnXFy.jpg",
//     artist: "Billie Holiday",
//     albumTitle: "Billie Holiday",
//     genre: "Jazz",
//     releaseDate: "April 14, 1954",
//   },
// ];

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
