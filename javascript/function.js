/*
function
{}
=> function is reusable block of code which perform specific task

steps:
1. function declaration
2. function initialization
3. function call


function syntax:

// function declaration, initialization
function function_name(){
    body of function
}

// function call
function_name()


function types:
1. named function
2. function with argument
3. function with return type
4. unnamed/anynamous function
5. IIFE(immediately invoked functional expression)

*/

// named function
function welcome(){
    console.log(" welcome to vedu!!!");
}

function add(){
    var n1 = 23;
    var n2 = 12;
    console.log(n1+n2);
}

welcome();
add();