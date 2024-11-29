const express = require('express')
const router = express.Router()
const mongodb = require("mongodb");
const UserModel = require('../model/user.model');
const mongoClient = mongodb.MongoClient;
const connectionURL = 'mongodb://localhost:27017'
const dbName = "group7db"
const mapUser = require("./../helpers/mapUser")
const passwordHash = require("password-hash")
const upload = require("./../middleware/upload")
const jwt = require("jsonwebtoken")
require("dotenv").config()

// console.log("file directory in auth: ", __dirname)
// console.log("root directory in auth: ", process.cwd())


function createToken(user) {
    let token;
    token = jwt.sign({
        username: user.username,
        email: user.email,
        role: user.role,
        _id: user._id
    }, process.env.SECRET_KEY)
    return token;
}


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

            if (user.isActivated) {
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
                    var token = createToken(user)
                    res.json({
                        token:token,
                        msg: "Logged In Successfully",
                        status: 200,
                        LoggedInUser: user
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

// multiple file upload
router.post("/signup", upload.array("img"), function (req, res, next) {
    // single file upload
    // router.post("/signup", upload.single("img"), function (req, res, next) {
    console.log("req.body: ", req.body)
    console.log("req.file: ", req.files)

    if (req.fileTypeError) {
        return next({
            msg: "Invalid File Format",
            status: 404
        })
    }

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




                // if(req.file){
                //     // console.log("req.file.mimetype: ", req.file.mimetype)

                //     var fileType = req.file.mimetype.split("/")[0] // "image"

                //     // console.log("fiel type is: ", fileType)

                //     // if(fileType=== "image/jpeg" || fileType === "image/png")
                //     if(fileType === "image"){
                //         req.body.img = req.file.originalname
                //     }
                // }





                // for single file upload
                if (req.file && req.file != null) {
                    // var fileType = req.file.mimetype.split("/")[0]
                    // if (fileType != "image") {
                    //     // file remove
                    //     // fs module
                    //     return next({
                    //         msg: "Invalid File Format",
                    //         status: 404
                    //     })
                    // }
                    req.body.img = req.file.originalname
                }

                // for multiple file upload
                if (req.files && req.files.length > 0) {
                    req.body.img = req.files.map(function (item, index) {
                        return item.originalname
                    })
                }




                var new_user = mapUser(user, req.body)
                if (req.body.email) {
                    new_user.email = req.body.email
                }
                if (req.body.password) {
                    new_user.password = passwordHash.generate(req.body.password)
                }
                new_user.save()
                    .then(function (newUser) {
                        res.json({
                            msg:"Registration Successfull",
                            user:newUser,
                            status:200
                        })
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