const mongoose = require("mongoose")
const config = require("./db.config")

mongoose.connect(config.connectionURL + "/" + config.dbName)
    .then(function (done) {
        console.log("database connected successfully!!!")
    })
    .catch(function (err) {
        console.log("error is: ", err)
    })