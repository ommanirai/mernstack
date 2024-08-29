/*
Loop in js
types:
1. for loop
syntax:
for(initialization;condition;increment/decrement){
    body of for loop
}

# task
# write a program(wap) to print a number from 1 to 10
initialization:
i = 1

condition:
i == 10
i < 11
i <= 10
i >= 10

increment/decrement
increment
i++

2. while loop
syntax:

initialization;
while(condition){
    body of while
    increment/decrement
}


3. do-while loop
syntax:

initialization
do{
    body of do while
    increment/decrement
}while(condition)

*/
// i=1
var sum = 0
var fact = 1
// var n = Number(prompt("enter  number"))
// for (i = 5; i >= 1; i--) {
for (i = 1; i < 6; i++) {
    // console.log(i); // 1 - 10

    // wap to print a collection of odd number from 1 to 10
    // if (i % 2 != 0) {
    //     console.log(i)
    // }

    // wap to print the sum of number from 1 to 10
    // wap to print the sum of natural number
    // sum = sum + i;
    // sum+=i;

    // wap to print the factorial of a number 5
    // 5 * 4 * 3 * 2 * 1
    fact *= i;
}
// console.log(sum)
// console.log(fact)

// while
var i = 1 // initialization
// while(i<=10){ // condition
//     console.log(i)
//     i++ // increment
// }

// do while
// do{
//     console.log(i)
//     i++ // increment
// }while(i<=10) // condition

for (i; i <= 5; i++) {
    // i=1, 2, 3, 4,5
    // console.log(i)
    // nested loop
    for (j = 1; j <= 5; j++) {
        console.log(j)
    }
}