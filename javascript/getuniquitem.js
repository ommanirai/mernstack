// task 1
var fruits = ['kiwi', 'apple', 'mango', 'apple', 'orange', "kiwi"]
var number = [1,2,3,4,5,2,3,4,5,2]
var bikes = ['honda', 'yamaha', 'honda']

// function return
function getUniqueItem(data){
    var uniqueItem = []
    data.forEach(function(item,index){
        if(uniqueItem.indexOf(item)===-1){
            uniqueItem.push(item);
        }
    })
    console.log(uniqueItem)
}

getUniqueItem(bikes)
getUniqueItem(number)
getUniqueItem(fruits)



// var bikes = ['honda', 'yahmaha', 'honda']
// // task 2
// var countitem={}
// expected result
// {
//     honda:2,
//     yahama:1
// }