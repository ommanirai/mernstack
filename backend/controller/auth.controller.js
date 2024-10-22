const express = require('express')
const router = express.Router()
const mongodb = require("mongodb");
const UserModel = require('../model/user.model');
const mongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://localhost:27017'
const dbName = "group7db"
const mapUser = require("./../helpers/mapUser")
const passwordHash = require("password-hash")



// console.log("file directory in auth: ", __dirname)
// console.log("root directory in auth: ", process.cwd())


// /auth/login
router.post('/login', function (req, res, next) {
    UserModel.findOne({
        email: req.body.email
    })
        .then(function (user) {
            if (!user) {
                return next({
                    msg: "Email Not Registered Yet",
                    status: 404
                })
            }

            if (!user.isActivated) {
                return next({
                    msg: "Please Activate Your Acocunt/Contact System Administrator",
                    status: 404
                })
            }

            if (user) {
                var isMatched = passwordHash.verify(req.body.password, user.password)
                if (!isMatched) {
                    return next({
                        msg: "Invalid Password",
                        status: 404
                    })
                }
                if (isMatched) {
                    res.json({
                        LoggedInUser: user,
                        msg: "Logged In Successfully",
                        status: 200
                    })
                }
            }
        })
        .catch(function (err) {
            return next(err)
        })
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
    UserModel.find({
        email: req.body.email
    })
        .then(function (user) {
            if (user[0]) {
                return next({
                    msg: "Email Already Exist/User already registered",
                    status: 404
                })
            }
            if (!user[0]) {
                const user = new UserModel()
                // user is now mongoose object



                // if (req.body.username) {
                //     user.username = req.body.username
                // }
                // if (req.body.phone_number) {
                //     user.phone = req.body.phone_number
                // }
                // if (req.body.date_of_birth) {
                //     user.dob = req.body.date_of_birth
                // }
                // if (req.body.gender) {
                //     user.gender = req.body.gender
                // }
                // if (!user.address) {
                //     user.address = {}
                // }
                // if (req.body.temporary_address) {
                //     user.address.temporaryAddress = req.body.temporary_address
                // }
                // if (req.body.permanent_address) {
                //     user.address.permanentAddress = req.body.permanent_address
                // }
                var new_user = mapUser(user, req.body)
                if (req.body.email) {
                    new_user.email = req.body.email
                }
                if (req.body.password) {
                    new_user.password = passwordHash.generate(req.body.password)
                }
                new_user.save()
                    .then(function (newUser) {
                        res.json(newUser)
                    })
                    .catch(function (err) {
                        return next(err)
                    })
            }
        })
        .catch(function (err) {
            return next(err)
        })
})


module.exports = router