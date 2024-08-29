/*
function with argument:
syntax:
function function_name(parameter1, parameter2, parameter n){
    body of function
}

function_name(argument1, argument2, argument n)

*/
// function welcome(name, address) {
//     // name is parameter
//     console.log("hi " + name + " welcome to " + address + " !!!");
// }

// welcome(null,'vedu');
// // ram is argument
// welcome('shyam', "Lalitpur");
// welcome('sita', "Kathmandu");


// function welcome(name, address, email, phone, status) {
//     // name is parameter
//     console.log("hi " + name + " welcome to " + address + " !!! " + email +" "+ phone +" "+ status);
// }

// welcome('sujal', 'vedu', '9823424323','sujal@gmail.com',  'active');

function welcome(details) {
    // console.log("what comes in details: ", details)
    console.log('hi ' + details.name + " welcome to " + details.address + " !!! " + details.email + " " + details.phone + " " + details.status)
}

var details = {
    name: 'sujal',
    phone: '98234232',
    email: 'sujal@gmail.com',
    address: 'vedu',
    status: 'active'
}

var det = ['sujal', '9823423234', 'sujal@gmail.com', 'vedu', 'active']

welcome(details)