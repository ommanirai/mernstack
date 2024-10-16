const express = require('express')
const router = express.Router()
const mongodb = require("mongodb");
const UserModel = require('../model/user.model');
const mongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://localhost:27017'
const dbName = "group7db"



// console.log("file directory in auth: ", __dirname)
// console.log("root directory in auth: ", process.cwd())

// /auth/login
router.get('/login', function (req, res, next) {
    res.json({
        msg: "from login page"
    })
})

// /auth/login
router.post('/login', function (req, res, next) {
})

// /auth/register
router.post('/register', function (req, res, next) {
    console.log("data is: ", req.body)

    // db stuff
    mongoClient.connect(connectionURL)
        .then(function (client) {
            var database = client.db(dbName)
            var collection = database.collection("user")
            collection.insertOne(req.body)
                .then(function (newUser) {
                    res.json({
                        registeredUser: req.body,
                        msg: "Hi " + req.body.username + " Your account has been created successfully"
                    })
                })
                .catch(function (err) {
                    return next(err)
                })
        })
        .catch(function (err) {
            return next(err)
        })
})


router.post("/signup", function (req, res, next) {
    const user = new UserModel()
    // user is now mongoose object
    user.username = req.body.username
    user.email = req.body.email
    user.password = req.body.password // TODO: hash password
    user.dob = req.body.date_of_birth
    user.gender = req.body.gender

    if (!user.address) {
        user.address = {}
    }

    user.address.temporaryAddress = req.body.temporary_address
    user.address.permanentAddress = req.body.permanent_address

    user.save()
        .then(function (newUser) {
            res.json(newUser)
        })
        .catch(function (err) {
            return next(err)
        })
})


module.exports = router