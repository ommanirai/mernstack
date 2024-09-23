const express = require("express")

const app = express()
// app is now entire express framework

const port = 8000;

// handler for get method and empty url
app.get("/", function (request, response) {
    response.send("home page")
})

// handler for get method and /contact url
app.get("/contact", function (request, response) {
    response.send("contact from")
})

// endpoint
// method and url combination


app.get("/login", function (request, response) {
    // javascript object notation
    response.json({
        "name": "user",
        "address": "vedu",
        "msg": "login successfully",
        "status": 200
    })
    // method for response
    /*
    send()
    json()
    download()
    render()
    sendFile()
    */
})

app.get('/user/update/:id', function (req, res) {
    // res.json({
    //     msg: "from user update",
    //     user_id: req.params.id,
    //     username: req.query.username,
    //     password: req.query.password
    // })
    var reg_username = 'user'
    var reg_password = 'user123'
    if (req.query.username == reg_username && req.query.password == reg_password) {
        res.json({
            msg: "logged in successfully",
            status: 200
        })
    }
    else {

    }
})

app.get("/write/:filename/:content", function (request, response) {
    // response.json({
    //     filename: request.params
    // })
    response.json(request.params)
})

// app.get("*", function (req, res) {
//     res.json({
//         msg: "Page Not Found",
//         status: 404
//     })
// })

// ragardless of any method and any url
var mid = function (req, res) {
    res.json({
        msg: "Page Not Found",
        status: 404
    })
}
app.use(mid, function (req, res) {

}, function (req, res) {

})

app.listen(port, function (err, done) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("server listening at port: ", port);
    }
})

// middleware
/*
function(req, res, next){

}



app.use(middleware)


app.use(function(req,res, next){
})

=> middleware is a function which has access to request object, response object and next middleware function reference
=> middleware always came into action in between req-res cycle
=> middleware can modify request object 

*/