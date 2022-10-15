const moviesArr = require("./movie.seed.json")

require("../db/index.js")

const Movies = require("../models/Movie.model.js")

Movies.insertMany(moviesArr)
.then(() => {
    console.log("Todo bien, películas agregadas");
})
.catch((err) => {
    console.log(err);
})