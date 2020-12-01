// function hello(){
//     return function(){
//         console.log("hello world");
//     }
// }
// hello()();
// output hello world

// ************Example:1 without higher order function**************Take an array and get another array by doubling the numbers.
 
// var numbers = [1,2,3,4];
// var result = [];

// for (let i=0; i<numbers.length; i++){
//     result.push(numbers[i] *2);
// }
// console.log(result);
// [2,4,6,8] output
// ----------------------------------------------------

// *********** ************Example:1 with higher order function**************Take an array and get another array by doubling the numbers.
// var numbers = [1,2,3,4];

// var result = numbers.map(function(number){
//     return number * 2;
// });
 
// console.log(result);

// *******with Arrow function*****
// var numbers = [1,2,3,4];
// var result = numbers.map(number=> number * 2);
// console.log(result);
// ----------------------------------------------------------------------

// *******Example:2***From the player's average number's array i want to make a new array of whose average is 37 and more.*****
// To do this firstly i need to run a for loop to get every single value and then set an if condition players average >=37 and push this avg 
//  into a new blank array.
/* var players = [
    {
        name : "Sakib",
        avg : 38.21
    },
    {
        name : "Tamim",
        avg : 36.9
    },
    {
        name : "Mahmudullah",
        avg : 37.4
    },
    {
        name : "Mushfique",
        avg : 37.8
    },
    {
        name : "Nasir",
        avg : 36.5
    }
];
var playersWithAvgTirtySeven = [];
for (i=0; i< players.length; i++){
    if(players[i].avg >=37){
        playersWithAvgTirtySeven.push(players[i]);
    }
}
console.log(playersWithAvgTirtySeven); */
 /*output: [
  { name: 'Sakib', avg: 38.21 },
     { name: 'Mahmudullah', avg: 37.4 },
  { name: 'Mushfique', avg: 37.8 } */
  
//  ***********with higher order function and arrow function*********************
  
  /*var players = [
    {
        name : "Sakib",
        avg : 38.21
    },
    {
        name : "Tamim",
        avg : 36.9
    },
    {
        name : "Mahmudullah",
        avg : 37.4
    },
    {
        name : "Mushfique",
        avg : 37.8
    },
    {
        name : "Nasir",
        avg : 36.5
    }
];
var playersWithAvgTirtySeven = players.filter((player)=> player.avg>=37);


console.log(playersWithAvgTirtySeven);
 output: [
  { name: 'Sakib', avg: 38.21 },
     { name: 'Mahmudullah', avg: 37.4 },
  { name: 'Mushfique', avg: 37.8 } */
//   ******* Example-3    Creating a map like function by me
var language = ["javascript", "Pyhon", "Php","C++"];
function mySumit(arr,fn){
    const newArray = [];
    for(let i=0; i <arr.length; i++){
        newArray.push(fn(arr[i]));
    }
    return newArray;
}
const mayArray = mySumit(language, function(lang){
    return lang.length;
})
console.log(myArray);