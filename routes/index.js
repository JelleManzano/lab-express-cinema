const Movies = require("../models/Movie.model.js")
const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req,res) => {
    Movies.find()
    .then ((response) => {
        console.log("Cogiendo la lista de pelis", response);
        res.render("../views/movies.hbs",{
            moviesList: response,
        })
    })
})

router.get("/movies/:details", (req, res, next) => {
    const {details} = req.params
    Movies.findOne({"_id": details})
    .then((response)=>{
        res.render("movie-details.hbs", {
            details: response
        })
    })
    .catch((err) => {
        next(err)
    })
})

module.exports = router;
