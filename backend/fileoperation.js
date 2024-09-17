const fileWrite = require('./fileop');

fileWrite.deleteFile("ourfile.txt")
    .then(function (done) {
        console.log("success in file delete")
    })
    .catch(function (err) {
        console.log("error in file delete")
    })

// console.log("filewrite is: ", fileWrite)
// fileWrite.renameFile("updatedNewDemo.txt", "NewDemo.txt")
//     .then(function (done) {
//         console.log("success in file renaming");
//     })
//     .catch(function (err) {
//         console.log("error in file renaming");
//     })

// fileWrite.ReadFile("demo.txt")
//     .then(function (done) {
//         console.log("file content is: ", done)
//         // console.log("file content is: ", done.toString())
//     })
//     .catch(function (err) {
//         console.log("error is: ", err)
//     })



// fileWrite.myWrite("random.txt", "calling file write module from another file")
//     .then(function (done) {
//         console.log("success in file write from another file: ", done);
//     })
//     .catch(function (err) {
//         console.log("error in file write: ", err)
//     })
