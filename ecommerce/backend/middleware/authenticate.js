const jwt = require("jsonwebtoken")

module.exports = function(req, res, next){
    var token;
    if(req.headers["authorization"]){
        token = req.headers["authorization"]
    }
    if(req.query.token){
        token = req.query.token
    }

    if(token){
        // verify token
        jwt.verify(token,process.env.SECRET_KEY, function(err,done){
            if(err){
                return next({
                    msg:"Invalid Token/Token Verification Fail",
                    status:404
                })
            }
            if(done){
                req.loggedInUser = done.username
                // console.log("decoded user: ", done)
                next()
            }
        })
    }
    else{
        return next({
            msg:"Token Not Found",
            status:404
        })
    }
}