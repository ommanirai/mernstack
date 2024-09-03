// array loop in js
/*
1. forEach
2. map
3. filter
4. some
5. every
6. find
7. reduce
*/
var fruits = ['kiwi', 'apple', 'mango', 'apple', 'orange', "kiwi"]
var number = [1,2,3,4,5,2,3,4,5,2]
var bikes = ['honda', 'yahmaha', 'honda']

// forEach
var uniqueFruits = []
fruits.forEach(function (item, index) {
    // console.log(item)
    // console.log(index)
    // console.log('index of element ', item, ' is', index)    
    if (uniqueFruits.indexOf(item) == -1) {
        // if(uniqueFruits.includes(item)){
        uniqueFruits.push(item)
    }
    // else{
    //     uniqueFruits.push(item)
    // }
})
console.log(uniqueFruits)


var uniqueNumber = []
number.forEach(function (item, index) {
    // console.log(item)
    // console.log(index)
    // console.log('index of element ', item, ' is', index)    
    if (uniqueNumber.indexOf(item) == -1) {
        // if(uniqueFruits.includes(item)){
        uniqueNumber.push(item)
    }
    // else{
    //     uniqueFruits.push(item)
    // }
})
console.log(uniqueNumber)

// task 1
// functional
getUnieItem(bikes);
getUnieItem(numeber);
getUnieItem(fruits);

// function getUnieItem(data){

// }
var bikes = ['honda', 'yahmaha', 'honda']
// task 2
var countitem={}
// expected result
// {
//     honda:2,
//     yahama:1
// }