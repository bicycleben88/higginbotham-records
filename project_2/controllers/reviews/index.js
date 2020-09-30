//-----------------
//DEPENDENCIES
//-----------------
const { Router } = require('express');
const auth = require('../authmiddleware');
const Review = require('../../models/reviews');
const { route } = require('../auth');

//Create Router
const router = Router();

//-----------------
//ROUTES
//-----------------

//New 
router.get('/new/:id', auth, (req, res) => {  
    res.render('reviews/new', {
        id: req.params.id
    });
});
//Destroy
router.delete('/:id', auth, async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id, (error, foundReview) => {
            res.redirect(`/reviews/${foundReview.bandId}`);
        });
    } catch (error) {
        console.log(error);
    }
})
//Update 
router.put('/edit/:id', auth, async (req, res) => {
    try {
        req.body.username = req.session.username;
        await Review.findByIdAndUpdate(req.params.id, req.body, (error, updatedReview) => {
            res.redirect(`/reviews/${updatedReview.bandId}`);
        });
    } catch (error) {
        console.log(error);
    }
});
//Create
router.post('/new/:id', auth, async (req, res) => {
    try {
        req.body.username = req.session.username;
        req.body.bandId = req.params.id;
        await Review.create(req.body);
        res.redirect(`/reviews/${req.params.id}`);
    } catch (error) {
        console.log(error) 
    }
});
//Edit
router.get('/edit/:id', auth, async (req, res) => {
    try {
        await Review.findById(req.params.id, (error, foundReview) => {
            res.render('reviews/edit', { 
                review: foundReview,
                id: foundReview.bandId
            });
        });
    } catch (error) {
        console.log(error);
    }
});
//Show
router.get('/:id', async (req, res) => {
   try {
       await Review.find( { bandId : `${req.params.id}` }, (error, foundReviews) => {
        res.render('reviews/show', {
            id: req.params.id,
            reviews: foundReviews
        });
      });
   } catch (error) {
       console.log(error);
   }
});

//Export Router
module.exports = router;