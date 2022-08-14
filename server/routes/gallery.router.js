const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route after transferring data to db ----------
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    console.log(galleryId); // This is the component/object id number

    let queryText = 
    `
    UPDATE  "gallery"
    SET "likes" = "likes" + 1
    WHERE "id" = $1;
    `

    pool.query(queryText, [galleryId])
        .then( (results) => {
            res.sendStatus(200)
        }).catch( (err) => {
            console.error('ERROR IN SERVER PUT', err);
            res.sendStatus(500);
        })

    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);
}); // END PUT Route

// GET Route after transferring data to db ----------
router.get('/', (req, res) => {
    console.log('in /GET');
    
    let queryText = 
    `
    SELECT * FROM "gallery" ORDER BY "id";
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