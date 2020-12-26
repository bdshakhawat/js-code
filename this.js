// *****************Rule 1 implicit this *************in 80% case this can be identified with this method.********

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
// 1. implicitly binding. 2. explicit binding. 3. new binding  4. window binding  



// *******1. Implicit binding************** In this case there will be a dot and after that this object will sit.
// here in the example sakib.father.printName(); father is 'this' object. 
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



// *********Rule 2. Explicit binding***************
// var printName = function (){
//     console.log(this.age);
// }

// var sakib = {
//     name : "sakib",
//     age : 38,
// };
// printName.call(sakib);
//  output 38



//*** */ now it is not possible to access this function with sakib.printName because it is outside of sakib object
// so, to call this function with sakib object we need to use a in built function .call which can call any function
// explicitly by the programmer.********

// with .call inbuilt function programmer can specifically of explicitly tell javascript that which object will be
// considered as this.



// *******Now if i want to some more properties to my object sakib then
// var printName = function (v1,v2,v3){
//     console.log(`${this.name} is ${v1},${v2} and ${v3}`);
// }

// var sakib = {
//     name : "sakib",
//     age : 38,
// };
// var v1= "Bowler";
// var v2 = "Batsman";
// var v3 = "All rounder";
// printName.call(sakib,v1,v2,v3);
// output sakib is bowler, batsman and All rounder.
// now i can pass all this unlimeted properties as parameters of call function. Now printName function will receive 
// all this parameters and change console.log (`sakib${this.name} is ${v1})Bowler,${v2}Batsman & ${v3}All rounder`);



// **********use of .apply built in function instead of .call************
// if there are multiple properties of an object then it is a little problematic to pass them one by one. so, to solve
// this problem we can use array of properties and send them by using .apply function. Because .call function can't pass array.
// var printName = function (v){
//     console.log(`${this.name} is ${v1},${v2} and ${v3}`);
// }

// var sakib = {
//     name : "sakib",
//     age : 38,
// };
// var v1= "Bowler";
// var v2 = "Batsman";
// var v3 = "All rounder";
// var v =[v1,v2,v3];
// printName.apply(sakib,v);
// output same sakib is bowler, batsman and All rounder.



// now .bind  works like .call it will pass properties one by one but like .call function .bind  function don't call
// the printName function rather it return the instance of the printName function into a variable like newFund
// Then we can call this instance of the function kept inside the variable newFund like newFunc();
// var printName = function (v1,v2,v3){
//         console.log(`${this.name} is ${v1},${v2} and ${v3}`);
//     }
    
//     var sakib = {
//         name : "sakib",
//         age : 38,
//     };
//     var v1= "Bowler";
//     var v2 = "Batsman";
//     var v3 = "All rounder";
//     var newFunc = printName.bind(sakib,v1,v2,v3);
//     newFunc();
    // output same sakib is bowler, batsman and All rounder.
    //  so finally if we want to use any outer context function inside an object then we can explicitly call this 
    // function by using .call , .apply and .bind




    // **************Rule 3 new binding********************
    // function person(name,age){
        // when we write new then by new keyword js create an new object named 'this' like: 
        // let this = object.create(null); and setting the parameters receiving from new person.
        // and finally (return this) "return the object create by the new keyword " like: return  this;
        // let this = object.create(null);
        // this.name = name;
        // this.age = age;
        // console.log(`${this.name} is ${this.age} years old`);
        // return this
    // }
    // let sakib = new person("sakin",42);
    // "use strict"
    // printName = function (){
        // console.log(window === this); true without strict mode
        // console.log(window === this); false with strict mode 
        // console.log(this);output:  error  with strict mode
        // console.log(this); output: Object [global] without strict mode
        //     console.log(this.age);
        // }
        
        // var sakib = {
        //     name : "sakib",
            
        // };
        // printName(sakib);
        // Here we are getting "undefined".But the function 'printName' is outside the scope  so we shoule get error.
        // why this is happenning? because when js will fail to point "this" with any earlier three methods like:
        // implicit,explicit or bind method then by default it will poit "this " as window object and thus we will 
        //  get "undefined".By doing console.log(this) we can easily identify which type of object is this.
        // to solve this window problem we can use "use strict" at the top


