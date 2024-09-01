/*
mutation
1. mutable behaviour
=> if change in original it is reflected in reference
=> if change in reference it is reflected in original
=> non primitive data types are mutable(object and array)

2. immutable behaviour
=> if change in original it is not reflected in reference
=> if change in reference it is not reflected in original
=> primitive data types are immutable

*/
// var laptop1 = {
//     name: 'acer'
// }
// var laptop2 = laptop1;
// laptop1.ram = '16GB';
// laptop2.price = 100000;

// console.log(laptop1);
// console.log(laptop2);
// var detail = {
//     name:'sujal'
// }
// detail.address = "ktm"

var status = "active" 
function displayResult(det){
    det = "inactive"
    // det.status = 'active'
    console.log(det)
}
displayResult(status)
console.log(status)
// displayResult(detail)
// console.log(detail)


var name = 'sujal';
var name1 = name;
name = "rahul";
name1 = 'gita mata';
// console.log(name);
// console.log(name1);
