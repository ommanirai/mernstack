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
    },
    {
        name: 'hp',
        generation: 'i9',
        ram: '16GB'
    },
    {
        name: 'acer',
        generation: 'i7',
        ram: '8GB'
    },
    {
        name: 'hp',
        generation: 'i4',
        ram: '8GB'
    },
    {
        name: 'asus',
        generation: 'i9',
        ram: '8GB'
    },
    {
        name: 'lenovo',
        generation: 'i7',
        ram: '8GB'
    },
    {
        name: 'acer',
        generation: 'i5',
        ram: '4GB'
    }
]

laptops.forEach(function(item, index){
    // console.log(item)
    item.offer = "10% off"
})
// console.log(laptops)

// filter
var acerLaptop = laptops.filter(function (item, index) {
    if (item.name === 'acer' && item.generation === 'i7') {
        return item;
    }
})
// console.log(acerLaptop)

// map
var laptopNames = laptops.map(function(item, index){
    return item.name;
})
// console.log(laptopNames)


// some
var searchName = laptops.some(function(item, index){
    if(item.name==="dell"){
        return true;
    }
})
// console.log(searchName)

// every
var searchNames = laptops.every(function(item, index){
    if(item.offer==="10% off"){
        return true;
    }
})
// console.log(searchNames)

// find
var findResult = laptops.find(function(item, index){
    if(item.name === "acer"){
        return item;
    }
})
// console.log(findResult)

// reduce
laptops.reduce(function(acc, item, index, source){
    console.log(source)
    return 1;
}, 12)