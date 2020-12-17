/*var age = 18;
var type;
if(age >= 18) {
    type = "Adult";
} else {
    type = "Child"
};
console.log(type); **/
/* Now if we write this with the help of ternary operator---
var age = 18;
var type = (age >= 18)  ?  "Adult"  : "Child";
console.log(type);*/
/*If we want to add nested condition then i can add in the else block or falsy block or here in the child block.Like--
var age = 10;
var type = (age >= 18)  ?  "Adult" : (age >= 10)   ?   "Young" : "Child";
console.log(type);
But tennary operator is good to use for one or two level condition not more than this. Because it will be complicated then.
For more condition level we have to use loop or switch.*/
/*Another example if var isLoggedin true then access will be true and if isLoggedin false then access will be false.
var isLoggedin = true;
// var access = isLoggedin ? "You can login" : "You can't login";  output: You can login.
var access = isLoggedin;
console.log(access);
//  output: You can login.This short form is applicable for truthy/falsy value.*/
/* If my expected outcome is true or false then i can write this short form
var a =5;
// var access =(a>5) ? true : false;
var access = a>5;
console.log(access);
output: false.*/


