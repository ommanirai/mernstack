const express = require('express')
const router = express.Router()


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
    res.json({
        registeredUser:req.body,
        msg: "Hi "+req.body.username+" Your account has been created successfully"
    })
})




module.exports = router