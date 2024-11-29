const express = require("express");
const morgan = require('morgan');
const authRouter = require('./controller/auth.controller');
const userRouter = require('./controller/user.controller');
const categoryRouter = require("./route/category.route")
const productRouter = require("./route/product.route")
const path = require("path")
const isAdmin = require('./middleware/isAdmin')
const authenticate = require("./middleware/authenticate")
const cors = require("cors")

// console.log("file directory: ", __dirname)
// console.log("root directory: ", process.cwd())

const app = express()

const port = 8000;

require("./config/db")

app.use(cors())

// third party middleware
app.use(morgan('dev'))

// json
// parser for application/json
app.use(express.json())

// parser for x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}))

// inbuilt middleware
// file
// internal serve
app.use(express.static('uploads'))
app.use('/file', express.static(path.join(process.cwd() + "/uploads")))

app.use('/auth', authRouter)
app.use('/user', authenticate, userRouter)
app.use("/category", authenticate, categoryRouter)
app.use("/product", authenticate, productRouter)


app.get("*", function (req, res) {
    next({
        msg: "Page Not Found",
        status: 404
    })
})

app.use(function (req, res, next) {
    next({
        msg: "Page Not Found",
        status: 404
    })
})

app.use(function (req, res, next) {
    next({
        msg: "from first middleware",
        // status: 404
    })
})

// error  handling middleware
app.use(function (err, req, res, next) {
    res.status(400)
    res.json({
        // error: "From error handling middleware",
        msg: err.msg || err,
        status: err.status || 400
    })
})


app.listen(port, function (err, done) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("server listening at port: ", port);
    }
})
