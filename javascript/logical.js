console.log("logical operator in javascript")
/*
logical operator
types:
1. logical and(&&)
condition1      condition2      result(condition1 && condition2)
TRUE            TRUE            TRUE && TRUE => TRUE
TRUE            FALSE           TRUE && FALSE => FALSE
FALSE           TRUE            FALSE && TRUE => FALSE
FALSE           FALSE           FALSE && FALSE => FALSE


condition1  condition2  condition3  
result(condition1 && condition2 && condition3) 

2. logical or(||)
condition1      condition2      result(condition1 || condition2)
TRUE            TRUE            TRUE || TRUE => TRUE
TRUE            FALSE           TRUE || FALSE => TRUE
FALSE           TRUE            FALSE || TRUE => TRUE
FALSE           FALSE           FALSE || FALSE => FALSE

3. logical not(!)
true => !true => false
false => !false => true


*/
var a = 23
var b = 12
var result = a > 2 // true
// console.log(result)

var result1 = b > 1234234 // true
// console.log(result1)

// console.log(a > 223 && b > 1)
// console.log(result && result1)
// console.log(result || result1)
console.log(!(result || result1)) // !true = false
console.log(!result || !result1)
// console.log(!true)

// boolean comparision
// console.log(result > result1)