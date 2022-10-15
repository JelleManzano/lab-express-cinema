const moviesArr = require("./movie.seed.json")

require("../db/index")

const Movies = require("../models/Movie.model")

Movies.insertMany(moviesArr)
.then(() => {
    console.log("Todo bien, películas agregadas");
})
.catch((err) => {
    console.log(err);
})