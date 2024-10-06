// object method
var details = {
    name: 'acer',
    generation: 'i7',
    color: 'grey',
    name: 'samsung',
    key:"hi"
}
// console.log(details.hasOwnProperty('names'))
// console.log(Object.keys(details))
// console.log(Object.values(details))

// for, while , do while

// forin
for (var key in details) {
    // console.log(key)
    // console.log(details.key)
    console.log(details[key])
}
