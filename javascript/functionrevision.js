// function
var a;
a = 234;

function welcome(name, address, greetingText) {
    // console.log("what comes in name; ", name)
    // name, addresss => parameter
    console.log("hi " + name.person_Name + " welcome to " + address)
}
var det = {
    person_Name: 'sujan',
    person_address: 'ktm'
}

var addresss = "vedu"

// welcome(det, addresss)
// welcome(det, addresss)
// welcome(det, addresss)
// welcome(det, addresss)
// welcome(det, addresss)
// ram, vedu => argument

function wel(name, address) {
    // return name;
    // return address;
    return {
        name:name,
        address:address
    }
    // console.log('hi', name,'welcome to vedu')
}
var result =  wel("rahul", 'ktm')
console.log("hello", result.name, "welcome to ", result.address);
console.log("hi", wel("sita"), "welcome to lalitpur");
console.log("good morning", wel("sita"), "welcome to lalitpur");