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
        next()
    }
    else{
        return next({
            msg:"Token Not Found",
            status:404
        })
    }
}