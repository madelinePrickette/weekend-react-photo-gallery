const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    console.log('in /GET');
    
    let queryText = 
    `
    SELECT * FROM "gallery";
    `;

    pool.query(queryText)
        .then( (results) => {
            res.send(results.rows);
        }).catch( (err) => {
            console.error('ERROR IN SERVER GET', err);
            res.sendStatus(500)
        });
}); // END GET Route

module.exports = router;