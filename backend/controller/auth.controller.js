const express = require('express')
const router = express.Router()

// /auth/login
router.get('/login', function (req, res, next) {
    res.json({
        msg:"from login page"
    })
})

// /auth/login
router.post('/login', function(req,res, next){
    
})

// /auth/register
router.post('/register', function(req,res,next){

})
module.exports = router