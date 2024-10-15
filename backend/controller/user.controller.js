const router = require('express').Router()
// const express = require('express')
// const router = express.Router()
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const conxnURL = "mongodb://localhost:27017";
const dbName = "group7db";
const Oid = mongodb.ObjectId

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
// localhost:8000/user/user_id
// req.params
router.route("/:user_id")
    .put(function (req, res, next) {
        console.log('requested data: ', req.body)
        var updateData = {
            username: req.body.username
        }
        mongoClient.connect(conxnURL)
            .then(function (client) {
                var database = client.db(dbName)
                var collection = database.collection("user")
                collection.updateOne({
                    _id: new Oid(req.params.user_id)
                }, {
                    $set: updateData
                })
                    .then(function (updatedUser) {
                        res.json(updatedUser)
                    })
                    .catch(function (err) {
                        return next(err)
                    })
            })
            .catch(function (err) {
                return next(err)
            })

    })
    .delete(function (req, res, next) {
        mongoClient.connect(conxnURL)
            .then(function (client) {
                var database = client.db(dbName)
                var collection = database.collection("user")
                collection.deleteOne({ _id: new Oid(req.params.user_id) })
                    .then(function (deletedUser) {
                        res.json(deletedUser)
                    })
                    .catch(function (err) {
                        return next(err)
                    })
            })
            .catch(function (err) {
                return next(err)
            })
    })


module.exports = router