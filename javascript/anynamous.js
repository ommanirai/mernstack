// hi()
// result()
// var result;
// result()

function hi() {
    // body of function
    console.log('hi from hello function');
}

// var result = function () {
//     // unnamed function
//     console.log("i am unnamed funciton");
// }
// console.log(typeof(result))
// result()
// hi()

// hoisting
// hosting is a m

// method
// setInterval(function () {
//     console.log(1)
// }, 1000)

// setTimeout(function(){
//     console.log("hello")
// }, 5000)

// iife
// ()()
(hi)();
(function(){
    console.log("i am unnamed funciton")
    console.log("i am tkaing help of IIFE to get execute")
})();