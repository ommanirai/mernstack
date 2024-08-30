/*
function with return type:
syntax:
function function_name(params1, params2, ...){
    return something/data
}

*/
function welcome(name){
    // console.log("hi ", name, ' welcome to vedu!!!');
    return name;
    // console.log("below return");
}

// console.log(welcome('sujal'));

// var result = welcome('rahul');
// console.log("good mornig ", result, ' welcome to vedu');

// var result2 = welcome("siwani");
// console.log("hi ", result2, 'welcome to vedu')

function displayList(){
    var fruits = ['kiwi', 'apple']
    var languages = {
        language1:'javascript',
        language2:'python',
        language3:'Java',
    }

    return {
        fruits:fruits,
        languages:languages
    };
}


var result = displayList();
console.log(result);
console.log(result.fruits[0], result.fruits[1]);