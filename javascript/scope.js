/*
application data:
var, let, const, function

scope
=>accessibility of application data
types:
1. global scope
2. functional/local scope
3. block scope

*/
// global scope
// accessible within a file
// declare in outermost layer
// var n = 23;
// let a = 'ram';
// address = 'hi'
// const pi = 3.14;
// if(true){
//     console.log(n)
// }
// function hi(){
//     console.log(n)
// }


// functional/local scope
// declare within a function
// var maintain functional scope
// accessible within a function
// var a = 1212;
// function demo(name, address){
//     // name and address(parameter) is functional scope
//     console.log(name, address);
//     a = 13;
//     console.log(a);
// }
// demo('ram', 'vedu')
// console.log(a)
// console.log(name, address);




// block scope
// declare within a block
// accessible within a block
// let maintain the local scope
// {}
// var greetingText = "hi"
if(true){
    let greetingText = "hello"
    console.log(greetingText)
}
else{
    let greetingText = "good morning"
    console.log(greetingText)
}
console.log(greetingText)