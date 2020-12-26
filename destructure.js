// The most beautiful features of ES6 is destructureing. When we will work with big data structure or with react, node js 
// Express js every where we have to use this method frequently.Because in real project we mostly work with array and object
// when we work with large data set then inside object there are so many arrays and inside this array there are nested 
// objects and functions. Now from this big data set always we need some specific data set not all. In this case this
// destructring method is very useful to do that.It simply works like a magic.
// ******1. object destrctring.It means from the object i will bring out some of the required element*********
/*const person = {
    id : 420,
    name : "mishu",
    age : 42,
}
// now i want to pick up the name property and then assign it into another variable so that i can use it in another place.
// First do it in traditional system without using destructring method
// var nam = person['name'];
// console.log(nam);
// output: mishu
// ***now if i use destructuring method then the syntax will be:  var {required object property} = main object(as left hand side is an object then right 
// hand side will be also an object).
// const {name} = person;
// console.log(name);
// output: mishu. her in this case the name property will be stored inside a name variable. But if i want to store it 
 inside another variable say nam then i can write var {name : nam} then console.log(nam)
const {name : nam} = person;
console.log(nam);
// output: mishu
const person = {
    id : 420,
    name : "mishu",
    age : 42,
    // education : {
    //     degree : "Masters",
    //     firstYear : 2,
    //     lastYear : 1,
        
        
    };

// now i want the degree property inside the education property object
// const {education : {degree : lastEducation}} = person;
// console.log(lastEducation);
// output: Masters.
// const {education : {firstYear}} = person;
// console.log(firstYear);
// output: 2; Now if the required information is missing in the object or collected data through API then to avoid error
// we can write like this to get the default value undefined instead of error: 
// const {education : {degree} = {} } = person;
// console.log(degree);
// output: undefined.At least your program will not crash.So, by using this type of default value we can minimise error.  */


/*                    ***Array destructure****
var numbers = [1,2,3,4];
// form this array i want to pick two value 1 and 2 then i want to keep them into the variable a and b
// var [a,b] = numbers;
// console.log(a,b);
// But if i need 2 and 4 and then assign them into a and b
var [,a,,b] = numbers;
console.log(a,b);
// output: 2 4 so, in this way i can pick any element without maintaining the order.        


//  *****Taking data from nested array***

var numbers = [1,2,[100,200,300],3,4];
// Now i need the values 200 and 300
const [, ,[,a,b]] = numbers;
console.log(a,b);
// output: 200,300 */




// ******Value swaping******
var a = 5;
var b = 6;
var c = 7;
// the old way to swap
// var swap = a;
// var a= b;
// var b = swap;
// Firstly  keep a inside swap so a is blank now keep b inside a so b is blank finally keep swap inside b and value is altered.
// console.log(b);
// output: 5.
// Now do it by using destructring method
[c,a,b] = [a,b,c]
console.log(a,b,c);
// output : 6 5 7






