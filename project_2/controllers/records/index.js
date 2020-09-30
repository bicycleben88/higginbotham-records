//-----------------
//DEPENDENCIES
//-----------------
const { Router } = require('express');
const auth = require('../authmiddleware');
const Record = require('../../models/records');

//Create Router
const router = Router();

//-------------------
//CREATE SEED DATA
//-------------------
const recordsSeed = [
    {
        username: 'Ben',
        albumArtwork: 'https://i.imgur.com/SfL749L.jpg',
        artist: 'Fleetwood Mac',
        albumTitle: 'Rumors',
        genre: 'Classic Rock',
        releaseDate: 'February 4th, 1977'
    },
    {
        username: 'Ben',
        albumArtwork: 'https://i.imgur.com/ObtFq7I.jpg',
        artist: 'Jay-Z',
        genre: 'Rap',
        releaseDate: 'November 14th, 2003',
        albumTitle: 'The Black Album'
    },
    {
        username: 'Ben',
        albumArtwork: 'https://i.imgur.com/55OjEXW.jpg',
        artist: 'Nirvana',
        genre: 'Rock',
        releaseDate: 'September 24th, 1991',
        albumTitle: 'Nevermind'
    },
    {
        username: 'Ben',
        albumArtwork: 'https://i.imgur.com/svbZDZT.jpg',
        artist: 'Garth Brooks',
        genre: 'Country',
        releaseDate: 'August 27th, 1990',
        albumTitle: 'No Fences'
    },
    {
        username: 'Ben',
        albumArtwork: 'https://i.imgur.com/dcVYHn8.jpg',
        artist: 'The Prodigy',
        genre: 'Techo',
        releaseDate: 'June 30th, 1997',
        albumTitle: 'The Fat of the Land'
    }
]

//-----------------
//ROUTES
//-----------------
//Index
router.get('/', async (req, res) => {
    try {
        await Record.find({}, (error, records) => {
            res.render('record/index', {
                records: records
            });
        });
    } catch (error) {
        console.log(error);
    }
});
//Seed Data
router.get('/seed', async (req, res) => {
    try {
       await Record.create(recordsSeed, (error, createdRecords) => {
            res.send(createdRecords);
        });
    } catch (error) {
        console.log(error);
    }
});
//Show
router.get('/:id', async (req, res) => {
    try {
        await Record.findById(req.params.id, (error, foundRecord) => {
            res.render('record/show', {
                record: foundRecord
            })
        });
    } catch (error) {
        console.log(error);
    }
});

//Export Router
module.exports = router;