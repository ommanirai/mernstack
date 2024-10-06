var fruits = ['kiwi', 'apple', 'mango', 'orange', "kiwi"]
// console.log(fruits.indexOf('kiwi'))
// console.log(fruits.lastIndexOf('kiwi'))
// console.log(fruits.indexOf('banana'))
// console.log(fruits.indexOf('papaya'))
// console.log(fruits.includes('apples'))

// add element
// in first position
// fruits.unshift("papaya")
// in last position
// fruits.push("strawberry")

// remove element
// from first position
// fruits.shift()
// from last position
// fruits.pop()
// console.log(fruits)

// slice
// console.log(fruits.slice(2,4))

// splice
fruits.splice(1,1,"kiwi", 2,3, true)

// fruits.splice(2,1,"papaya")
console.log(fruits)