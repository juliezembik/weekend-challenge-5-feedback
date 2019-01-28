const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('POST /feedback', req.body);
    const feedback = req.body;
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then((response) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('ERROR in POST /feedback', error);
        res.sendStatus(500);
    });
    
});

module.exports = router;