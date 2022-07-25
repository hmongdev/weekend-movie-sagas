const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res) => {
    //! Add query to get all genres
    //? After creating this route, now we're able to see details/:id show up

    const genreId = req.params.id;
    console.log(`GenreId:`, genreId);

    const sqlText = `select array_agg("name") as "name" from genres
    join movies_genres on movies_genres.genre_id = genres.id
    join movies on movies.id = movies_genres.movie_id
    where movies_genres.movie_id = $1;`;

    pool.query(sqlText, [genreId])
        .then((result) => {
            res.send(result.rows);
            console.log(`get genre router`, router.rows);
        })
        .catch((err) => {
            console.log(`ERR in get:`, err);
            res.sendStatus(500);
        });
});

module.exports = router;
