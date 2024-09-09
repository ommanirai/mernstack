// es6
// ecma script
/*
1. object shorthand
2. object destruction
3. default argument
4. template literals
5. arrow notation function
6. spread and rest operator
7. import and export
*/
// object shorthand
var names = 'sita'
var address = 'Lalitpur'
var details = { names, address }
// console.log(details)

// object destruct
function displayDetails(det) {
    return det;
}

var { names, address } = displayDetails(details)
// console.log(names)
// console.log(address)

// var result = displayDetails(details)
// console.log(result.name)


// default argument
function displayResult(det = { name: 'rahul', address: 'ktm' }) {
    console.log(det)
}
// displayResult(details)


// template literals
// + ,
// ``
var text = "my name: " + names + "my address: " + address
var result = `my name ${names} my address ${address}`
// console.log(result)


// arrow notation function
// es5 function
function hi(a) {
    // console.log("hi from es5 function");
    return a;
}
hi(12);
// es6 function
const hello = (a, b) => {
    console.log("hi from es6 function", a, b);
}
// hello(4,5);
// const ret = a =>{
//     return a;
// }

// one liner arrow function
const ret = a => a;
// console.log(ret(100))
var laptops = [
    {
        name: 'acer',
        generation: 'i7',
        ram: '8GB'
    },
    {
        name: 'samsung',
        generation: 'i7',
        ram: '8GB'
    },
    {
        name: 'acer',
        generation: 'i5',
        ram: '4GB'
    },
    {
        name: 'dell',
        generation: 'i3',
        ram: '8GB'
    }]

// var dellLaptop = laptops.filter(function(item, index){
//     if(item.name === "dell"){
//         return item;
//     }
// })
var dellLaptop = laptops.filter(item => item.name === "dell")
// console.log(dellLaptop)



// spread and rest operator
// ...
// spread operator
var a = {
    names: 'rahul'
}
var b = {
    city: 'ktm'
}
var c = {
    // concatinate object
    // convert to immutable
    ...a,
    ...b
}
a.location = 'random'
c.data = "asdfasd"
// console.log(a)
// console.log(c)


// rest operator
// ...

var data1 = 12342;
var data2 = 'suraj';
var data3 = true;
var main_data = { data1, data2, data3 }

const dataResult = main_data => {
    return main_data;
}

var { data2, ...rest } = dataResult(main_data)
// console.log(data2)
// console.log(rest)


// import and export
// file to file communication

// export
/*
function Demo(){}
1. named export
export function Demo(){}
export const MyFunction = Demo

2. default export
export default function Demo(){}

import
1. if named export
import {Demo, MyFunction} from './location_of_file'
import {MyFunction} from './location_of_file'

2. if default export
import App from './location_of_file'

3. if both named and default export
import {Demo, MyFunction}, App from './location_of_file'



*/