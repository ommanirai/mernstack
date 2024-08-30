function demo() {
    console.log('named demo function');
}
// var result;
/*
unnamed function in js
function(){}

*/

// result();
var result = function () {
    console.log("i am unnamed function");
}
// console.log(typeof(result))
// result();


// demo()
// hoisting => hoisting is a mechanism which moves all the declaration at top before execution


// method
// setInterval(function () {
//     console.log('hi');
// }, 1000);

// setInterval()
// setTimeout(function(){
//     console.log("delay 4 second");
// }, 4000);


// IIFE 
// syntax
// ()()
// demo();
// (demo)();


(function(){
    console.log("i am unnamed funciton");
    console.log('I am taking help of IIFE to get execute');
})()