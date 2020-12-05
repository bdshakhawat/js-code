/* ******1.variable nsming********
variable naming is very important to understand the project
Though the name becomes s little bit long still we need to give
a meaningful and self-expaanatory.so, that we can easily 
understand by the name about it's operation.
*** Avoid extra word in variable naming.***
EX: bad practice:
let namevalue
let theproduct
**Good practice
let name, let product,
***Write code in such a way that another programmer can 
understand your code without any problem***
Ex: bad practice
const products = ["T-shirt", "Shoes", "watches","Bags"];
products.forEach((p)=> {
    doSomethingElse();
    // what does p stands for?
    doSomethingElse(p);
});
***Good practice****
const products = ["T-shirt", "Shoes", "watches","Bags"];
products.forEach((product)=> {
    doSomethingElse();
    // use product instead of p for better understanding
    doSomethingElse(product);
});
Always try to write code in a way that it should be easily readable
for me as well as any other programer.
****No need to add unnecessary context*****
Ex: Bad practice
const product = {
    product Id: 1,
    productName:"T-shirt",
    productPrice:8.99,
    productUnits: 12,
};
******Good practice******
const product = {
   id: 1,
    Name:"T-shirt",
    Price:8.99,
    Units: 12,
};
*****Function naming********
01. Try to give a long and descriptive name for a function.
Bad practice:
function email(user){
    implementation;
}
Good practice:
function sendEmailToUser(email){
    implementation;
}
***Try to avoid too many arguments*****
Bad practice:
function getProducts(fields,fromDate, toDate){
    implementation.
}
Good practice:
function getProducts({fields,fromDate, toDate)}{
    implementation.
}
Here in first case i have send three arguments.But if
i send all this arguments as one objeect like in second
case then it will be counted as one argument which
is good practice then first case.
In test case this tricks will give benefit.
*****Try to use default arguments not conditionals.
Bad practice:
function createShape(tape){
    const shapeType = typw || "cricket" ;
}
Bad practice: 
function createShape(tape){
    const shapeType = typw || "circle" ;
}
Good practice:
function createShape(type = "circle"){
    .........;
}
In first case const shapeType = typw || "circle" and
is a conditional argument but the same thing we can do 
by using default argument like  type = "circle"
****Avoid to send flag type things as argument****
Ex: Bad
function createFile(name,isPublic){
    if (isPublic){
        fs.create(`./public/${name}`);
    } else{
        fs.create(name);
    }
}
Good:
unction createFile(name){
    
        fs.create(name);
    }
function createFile(isPublic){
    
        create(`./public/${name}`);
    }
In good practice we can saperate this two function.
***Try to avoid multiple tasks in one function rather 
write single function for every individual task*****
Bad:
function notifyUsers(users){
    users.forEach((user)=>{
        const userRecord = database.lookup(user);
        if (userRecord.isVerified()){
            notify(user);
        }
    })
}
// In this case two function is performing one is notifying
and another is veryfying. Now for simplidituy we can refactor
this function into two individual single function.
Good:
function notifyVerifiedUsers(users){
    users.filter((isUserVerified).forEach(notify);
}
function isUserVerified(user){
    const userRecord = database.lookup(users);
    return userRecord.isVerified()
}
****Refactiring function is one of the best practice in 
any functional programming. ***********

****Always do strong type check****
// 1== "1"; output:true
but 1 === "1" false
0== false; output:true
but 0===false; output:false
// try to use ===
Full example
const val = "123";
if (val=="123"){
    reachable. val will enter into the block.
    console.log(`1.${val}`);
}
if (val==123){
    reachable. val can  enter into the block.
    console.log(`2.${val})
}
if (val=== 123){
    unreachable. val can not enter into the block.because one is string and another is number.
    console.log(3.${val})
}
if (val==="123"){
    reachable because both are string.
    console.log(4.${val})
}
***sometimes we need to create any configuration type object and we consider this object as default object other than
this if we pass any thing from outside then this default's are replaced by the pssing object of outside and set there.
Bad practice:
const shapeConfig = {
    type: "circle",
    width: 150;
    height: null,
};
function createShape{config}{
    config.type = config.type || "circle";
    config.width = config.width ||300;
    config.height = config.height || 300;
}
createShape(shapeConfig);
***Good practice
onst shapeConfig = {
    type: "circle",
    width: 150;
    excluded the height as it can be null
};
function createShape{config}{
    // object.assign a beautiful feature of ES6.It receives two parameters one is target another is source.
    her it takes everything from the source object and paste it in the target object config.This merge this two object
    config--the source object's everything and the target object's everything together.
    config = object.assign(
        {
            type:"circle",
            width: 300;
            height: 300     ***target object

    },
    config    ***source object
    ) ;
    
}
createShape(shapeConfig);
***prototype pollution****
**Bad
Array.prototype.myFunction = function myFunction(){
    implementation
};
***Good
class MyArray extends Array {
    myFunc(){
        implementation
    }
}
[when we write Array with capital letter then it denotes the main array. If we can enter any function into the prototype
of an Array then we can use this function into any array from this prototype of main Array]
so it is a very bad practice to enter anyone's personal function inside the main Array.prototype rather you can 
create a class and extends it with the prototype which will be the best practice like the sceond case in this example.
******use conditionals shorthand******
Bad:
if(isValid===true){
    do something
}
if (isValid===false){
    do something
}

***Good
if(isValid){
    do something
}
if (isValid){
    do something
}
********use Method chaining******
Here is one simple class and inside the class there are three methods named setUnit, setPrice and save.Now by using 
this class we will create a new product bag and set its price,units and finally save this.
Bad:
class Product {
    constructor(name){
        this.name = name;
    }


setUnits(units){
    this.units= units;
}
setPrice(price){
    this.price = price;
}
save(){
    console.log(this.name,this.units,this.price);
 }
}
const product = new Product("Bag");

product.setPrice(23,99);
product.setUnits(12);
product.save();

***Good****
Now in earlier code i have used 
roduct.setPrice(23,99);
product.setUnits(12);
product.save(); but if i can return this product from every method then i can write this code in a easy to read way.
Here,all three methods are chained together.

class Product{
    constructor(name){
        this.name=name;
    }
    setUnits(units){
        this.units = units;
        return this;
    }
    setPrice(price){
        this.price = price;
        return this;
    }
    save(){
        console.log(this.name,this.price,this.units);
    }
}
// now using the method chaining we can write like this.
const product = new Product("T-shirt").setUnits(12).setPrice(500).save();
This is one of the best practice in class based code writing in javascript
********Avoid Eval**************this function creates a security vulnarability.the function of eval function is 
if i pass a string in it then this string execute as javascript code.
eval("alert("Hi")"; if i run this code in browser then i will get alert.
so, its a risky things.
****Always use curly braces snd use shortnands***
// case 1
if(someVariableExists)
x=false;
// case 2
if(someVariableExists)
x=false;
anotherFunctionCall();
// one might think that the code above would be equivalent to
if (someVariableExists){
    x=false;
    anotherFunctionCall();
}
// unfonunately he would be wrong. In reality it would be equal to---
if(someVariableExists){
    x=false;
}
anotherFunctionCall()
****add porototype methods on  the .prototype when writing constructor****
Bad practice:
function player(name,age){
    this.name = name;
    this.age = age;

    this.play = function (){
        console.log(`${this.name} is playing);
    };
}
let sakib = new player ("sakib", 38);
sakib.play();
***Good practice
function player(name,age){
    this.name = name;
    this.age = age;
}
player.prototype.play= function(){
    console.log(`${this.name} is playing);
}
let sakib = new player("sakib", 35);
let sakib = new player("Tamim", 36);
console.log(sakib);
console.log(tamim);
****In first case the .play method will be common in every new object i create so if there are more objects other than 
sakib and tamim then the object size will be huge and affect the performance.But in second case when we keep the play 
method in the prototype then the new objects can take this method accoeding to their reqirement. They will not get it 
by default.Always in constructor function the common cethods should be inserted into the prototype for better 
performance of javascript**********
******in case of For loop declaring variable outside the for statement
Bad practice
for (var i=0; i<someArray.length;i++){
  var  container = document.getElementById("container");
  container.innerHtml +="my number:" + i;
  console.log(i);
}
 ******Good practice****
 var container = document.getElementById("container");
 var len = someArray.length;
 for(var i=0; i<len;i++){
     container.innerHtml +="my number: " + 1;
     console.log(i);
 }
 now if there are 500 items then in first case we need to calculate the length 500 times and container by document.get 
 element by id 500time but if we write the code like second case then we need to calculate only one time instead of 
 500times both the length and container. so this code will be more efficient and performence optimized.Because DOM
 accessing is really off perfonmence job.So, allways try to lessen DOM access codes.
 ******Use Let and Const instead of var*********
if we think that the value can be change then use let but if we think that the may not change then use const.
****omit the use of frequent using of var keyword and instead of this use commas****
Bad practice:
var someItems = "some string";
var anotherItems = "another string";
var oneMoreItem = "one more string";
// Good practice
var someItems = "some string",
 anotherItems = "another string",
 oneMoreItem = "one more string";
 ***Always use semicolon. Highly recomented*******
****use IIFE as much as possible*****
when a function called by himself then it is called IIFE.
(function doSomething(){
    return {
        name:"sakib",
        lastName: "hasan"
    };
})();
***Modular pattern. Avoid using global
Bad:
var current = null;
function init(){
    do something
}
function change(){
    do something
}
function verify(){
    do something
}
***Good practice*****
// use of modular pattern
const myModule = (function(){
    var current =null;
    function init(){
        do something
        console.log("init");
    }
    function change(){
    do something
    }
    function verify(){
        do something
    }
    return {
        init
        change
        bortoman : current,
    }
})();
myModule.init();
****avoid language  attribute***
<script type = "text/javascript"| language =



