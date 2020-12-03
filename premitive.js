// var a = "sakib";
// var b = a;
// var a = "Tamim";
// console.log(a);
// console.log(b);
// output: a= Tamim. b=sakib here with the change of a  the valu of b is not changing
// In reference type values
// var a =["sakib","Tamim"];
// var b =a;
// this is change or mutate. In this case the vale will be changed in the heap stack
// a.push =["Mahmudullah"];
// output: [ 'sakib', 'Tamim', push: [ 'Mahmudullah' ] ]
// This is assignment. so it will create a poiter for the assignment
// a=[];
// console.log(a);
// console.log(b);
// output []   [ 'sakib', 'Tamim' ]
// *********copy immutably means if i want to copy another object in such a way that if i change the value of one object
// then the value of other object will not change by using spread operator
/*var language = {
    name : "javaScript",
    estd : "1995"
}
var language2 = {...language};
language.founder = "Brendon Eric";
console.log(language);
console.log(language2);
 out put: { name: 'javaScript', estd: '1995', founder: 'Brendon Eric' }
{ name: 'javaScript', estd: '1995' }
Here we see that founder is available in language but not in language2 */
// 
/*var language = {
    name : "javaScript",
    estd : "1995",
    library : ["React","Vieu","Jquery"]
}
var language2 = {...language};
language.library.push = "Angular";
console.log(language);
console.log(language2);
// output{
  name: 'javaScript',
  estd: '1995',
  library: [ 'React', 'Vieu', 'Jquery', push: 'Angular' ]
}
{
  name: 'javaScript',
  estd: '1995',
  library: [ 'React', 'Vieu', 'Jquery', push: 'Angular' ]
}
In first case we have seen that if we make any change in the property in language then languge2 will not change
but here we see that when we using .push then both language and language2 are getting this value.In second case 
spread operator can copy only the first level that means the first object only not the second object library 
because library is another object.Now if i want to copy everything then we can copy manually by using for...loop
or indivually taking  all the properties can make an array, but in real life application we need to use bigger oblect
with nested lbject or arrays. so the best practice will be to use a third party library named lodash.when we use react
then lodash is installed by default with it.So, by using lodash we can immutably copy any nested big object completely
like primite value.Let's see how we can do this by using lodash.
*/
/*var language = {
    name : "javaScript",
    estd : "1995",
    library : ["React","Vieu","Jquery"]
}
// var language2 = lodash(-)(language);
language.library.push = "Angular";
console.log(language);
console.log(language2);
// Here lodash cdn should be used with a html file.If we use lodash cdn then a _underscore sign appears and in this case
// angular will not appear in language2.*/
// Among all primitive values string, boolean, and number has object representation.
/*var a = "sakib";
console.dir(a)
// output: sakib  
// wrapper type object. Here first one is srting and second one is object
var b = new String("sakib");
console.dir(b);
// string object  and this primitive wrapper type object can use all the methods inside  an object prototype
but primitive string can not acess this methods but it can use the methods by borrowing the methids from 
the  wrapper type primitive thats why we can use methods with these three types of primitive values.
 */
/*  ***Primitive type can't be mutate******
var a = "sakib";
a.test = "Tamim";
console.log(a);
// here it skips the a.test but don't give any error.Just ignore this.Because it knows that he is premitive type
// so he will ignore it.So,reference type can be mutate but premitive type can't be mutate but it can reassign
*/

// *********pass by reference and pass by value************
/*let a = 1;
let change = (val)=>{
    val =2;

}
change(a);
// passed by reference.because when any types of value is passd as parameter inside a function whether it is primitive
// or reference it will be pass by reference.
console.log(a);*/
/*let a = {
    num : 1
}
let change = (val)=>{
    val ={};
    // this is assignment so creating a new scope so the value is not reflecting.as it is keeping it into a new scope.

}
change(a);*/

let a = {
    nm :1,
}
let change = (val)=>{
    val.nm =2;

}
change(a);




