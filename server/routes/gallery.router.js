const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

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

// START OF SERVER DELETE ROUTE
router.delete('/:id', (req, res) => {
    const galleryId = req.params.id;
    console.log(galleryId); // component id just like in put. 
    // This targets the component

    let queryText =
    `
    DELETE FROM "gallery"
    WHERE "id" = $1;
    `

    // QUERY GOES HERE
    pool.query(queryText, [galleryId])
        .then( (result) => {
            res.sendStatus(204)
        }).catch( (err) => {
            console.error('ERROR IN SERVER DELETE', err)
            res.sendStatus(500);
        });
})

// GET Route after transferring data to db ----------
router.get('/', (req, res) => {
    console.log('in /GET');
    
    let queryText = 
    `
    SELECT * FROM "gallery" ORDER BY "id" DESC;
    `;

    // results.rows is a bunch of data, it will be sorted by the client
    // as response.data
    pool.query(queryText)
        .then( (results) => {
            res.send(results.rows);
        }).catch( (err) => {
            console.error('ERROR IN SERVER GET', err);
            res.sendStatus(500)
        });
}); // END GET Route

// POST ROUTE SERVER
router.post('/', (req, res) => {
    console.log('in /POST')
    const pic = req.body;
    // re.body is what we are given by client


    const queryText =
    `
    INSERT INTO "gallery" ("path", "description", "likes")
    VALUES ($1, $2, $3);
    `;
    const queryValues = [pic.path, pic.description, pic.likes];
    // req.body is broken up here into path, description and likes
    pool.query(queryText, queryValues)
        .then((results) => {
            console.log(results)
            res.sendStatus(201);
        }).catch((err) => {
            console.error('ERROR IN SERVER POST', err)
            res.sendStatus(500);
        })
})

module.exports = router;