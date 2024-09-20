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

app.get("/write/:filename/:content",function(request,response){
    // response.json({
    //     filename: request.params
    // })
    response.json(request.params)
})


app.listen(port, function (err, done) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("server listening at port: ", port);
    }
})