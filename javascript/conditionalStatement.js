/*
conditional statement is js
1. if
syntax:
if(condition){
    body of if
}


condition value
truthy value => true, some defined value
falsy value => false, 0, " ", ' ', null, undefined


2. nested if
syntax:
if(condition1){
    body of if
    if(condition2){
        body of nested if
        if(condition3){
            if ladder
        }
    }
}

3. if else
syntax:
if(condition){
    body of if
}
else{
    body of else
}



4. nested if else
syntax:
if(condition1){
    body of condition 1
}
else if(condition2){
    body of condition 2
}
else if(condition 3){
    body of condition 3
}
else if(condiition n){
    body of condition n
}
else{
    body of else
}



5. switch
*/

// if
// var name = ''
// if (undefined) {
//     console.log("if statement");
// }

// var n = 2
// if(n%2==0){
//     console.log(n, ' is even number')
// }

// if(n%2!=0){
//     console.log(n, ' is odd number')
// }



// nested if
// if (n > 0) {
//     console.log("positive number")
//     if (n > 10) {
//         console.log('positive number greater than 10')
//     }
// }



// if else
var n = 12;
// if (n % 2 == 0) {
//     console.log("even number");
// }
// else {
//     console.log("odd number");
// }


var reg_user = 'ram';
var reg_password = "ranodm23";
var loggedin_user = 'ram';
var loggedin_password = 'ranodm23';

if(reg_user===loggedin_user && reg_password===loggedin_password){
    console.log("logged in successfully");
}
else{
    if(reg_user===loggedin_user || reg_password===loggedin_password){
        if(reg_user===loggedin_user){
            console.log("invalid password");
        }
        else{
            console.log("invalid username");
        }
        // if(reg_password==loggedin_password){
        //     console.log("invalid username");
        // }
    }
    else{
        console.log("both username and password invalid");
    }
}

// nested if else
var day = 7
if(day==1){
    console.log('sunday');
}
else if(day==2){
    console.log("monday");
}
else if(day==3){
    console.log("tuesday");
}
else if(day==4){
    console.log("wednesday");
}
else if(day==5){
    console.log("thursday");
}
else if(day==6){
    console.log("friday");
}
else if(day==7){
    console.log("saturday");
}
else{
    console.log("invalid input");
}

// calculator
// symbol
// number1, number2
// symbol==""