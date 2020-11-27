// var printPlayerNameFunction = function(obj){
//     obj.printPlayerNameFunction = function(){
//         console.log(this.name);
//     }
// }
// var sakib = {
//     name: "sakib",
//     age: 35,
// };
// var tamin = {
//     name: "tamim",
//     age: 38,
// };
// printPlayerNameFunction(sakib);
// printPlayerNameFunction(tamin);
// sakib.printPlayerNameFunction();
// tamin.printPlayerNameFunction();
// var person = function(name,age){
//     return {
//         name : name,
//         age : age,
//         printName : function (){
//             console.log(this.name);
//         }

//     }
// }
// var sakib = person("sakib",42);
// sakib.printName();
// There are four rules to identify which one object is this
// 1. implicitly binding. 2. explicit binding. 3. now binding  4. window binding  



// *******1. Implicit binding**************
// var person = function(name,age){
//     return {
//         name : name,
//         age : age,
//         printName : function (){
//             console.log(this.name);
//         },
//         father: {
//             name : "Jamir",
//             printName : function (){
//                 console.log(this.name);
//             }

//         }

//     }
// }
// var sakib = person("sakib",42);
// sakib.father.printName();
// *********Explicit binding***************
var printName = function (){
    console.log(this.age);
}

var sakib = {
    name : "sakib",
    age : 38,
};
printName.call(sakib);
//*** */ now it is not possible to access this function with sakib.printName because it is outside of sakib object
// so, to call this function with sakib object we need to use a in built function .call which can call any function
// explicitly by the programmer.********

// with .call inbuilt function programmer can specifically of explicitly tell javascript that which object will be
// considered as this.
