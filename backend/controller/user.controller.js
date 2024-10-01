const router = require('express').Router()
// const express = require('express')
// const router = express.Router()
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const conxnURL = "mongodb://localhost:27017";
const dbName = "group7db";

router.get('/myfile', function (req, res, next) {
    require('fs').readFile("ommani.txt", function (err, done) {
        if (err) {
            // next({
            //     msg:"error in file read"
            // })
            next(err)
        }
        res.json(done.toString())
    })
})


// /user/view
router.get('/view', function (req, res, next) {
    mongoClient.connect(conxnURL)
        .then(function (client) {
            var database = client.db(dbName)
            var collection = database.collection("user")
            collection
                .find()
                .toArray()
                .then(function (users) {
                    res.json(users)
                })
                .catch(function (err) {
                    return next(err)
                })
        })
        .catch(function (err) {
            return next(err)
        })
})

// /user/randomId
router.route("/:user_id")
    .get(function (req, res, next) {
        res.json({
            msg: "get single user detail"
        })
    })
    .post(function (req, res, next) {
        res.json({

        })
    })
    .put(function (req, res, next) {
        res.json({

        })
    })
    .delete(function (req, res, next) {
        res.json({

        })
    })




module.exports = router