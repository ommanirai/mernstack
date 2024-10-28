module.exports = function (req, res, next) {
    if (req.query.isAdmin=="ommani") {
        next()
    }
    else {
        next({
            msg: "Authentication fail, you don't have access"
        })
    }
}