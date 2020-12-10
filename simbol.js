// we can use symbol as a property of any object like other primitive value.


// var name1 = Symbol.for("name 1");
// var name2 = Symbol.for("name 2");
// console.log(name1 == name2);

// ****symbol can be used as a property of an object.to do this we have to write
// with third bracket like [name of the symbol].in fact if want to get a value of 
// a variable as the dynamic property of an object then we hane to uwe third bracket
// other wise it will repersent as a saptrate key of the object. in this case we will not 
// get the declated valu of the variable. if i want to take any variable or symbol
// dynamically not as a property in an object then we need to use third bracket
//  *****
// var cricket = Symbol.for("sakib");
// var object = {
//     name: "sakib",
//     [cricket]:"is a great cricketer",
// }
// console.log(object);
// output: sakib is a great cricketer
// var object = {};
// object.name = "javascript";
// object.estd = "1995";
// object[Symbol("founder")]= "Brendan Eric";
// console.log(object);
// { name: 'javascript', estd: '1995', [Symbol(founder)]: 'Brendan Eric' }

// for(let key in object){
//     console.log(key);
// }
// name  estd. So,we are not getting the symbol key which is hidden. Another way if we chcck like object.keys(object)
// console.log(object.keys(object));
// will return all the keys but still we can't see the symbol key. It will remain hidden.
// so this hidden property of symbol is very  useful is different cases. supose a property of an object which we don't 
// want in our iteration or in our loop property in this case it is very usefu and this will be required in different cases.
// for example in mongo db and sql server we use id which we use as identifier but do not want to disclose. So this type
// identifire property can be used with it help of symobl' hidden behaviour.

// second usecase of symbol
// if we want to insert any property of an object by us or any third party library then we can use symbol
// now let see how we can overwrite the function property inside prototype of the Array 
// var myArray = [1,2,3];
// console.log(myArray.includes(2));
// output: true because 2 is present in the array.
// we can also get the same output true by using ----
// console.log(myArray["includes"](2));
// var includes = Symbol("My own array includes methods");
// Array.prototype[includes] = () => {
//     console.log("This is my array includes function");
// }
// myArray[includes](2);
// output: This is my array includes function.
// var title = "javascript";
// console.log(title.search(/script/));
// out put: 4; now the question is how this search method works here? because "javascript" is a string and it has no methods
// of its own. To do this firstly, it convert the string into 'new string' which is a object and within its prototype
// all methods of object prototype are available.It also except regular expression /script/ for getting same value.
//  Secondly,  convert parameter /script/ into RegExp.
// Thirdly, it will look for symbol.search implementation inside the RegExp otherwise it will not call seach function.
// Here RegExp is implementing the search() but we can also implement this function by myself.when we write any string
// then actually RegExp is called then javascript send search() by default inside the RegExp and then RegExp implement 
// the search function. Now if we send our own object instead of RegExp and if i can implement search() in our object
// then our object can call the search() and will get the output.

// Now let's implement symbol.search in our own created object.
// class Product{
//     constructor(title){
//         this.title= title;
//     }
//     [Symbol.search](string) {
//         return string.indexOf(this.title) >= 0 ?  "Found" : "Not found";
//     }
// }
//  console.log("javascript".search("script"));
// var laptop = new Product("laptop");
// console.log("HP laptop".search(laptop));
// output found. so here my own object is implementing the search.symbol.
// now i send a RegExp or global string it will also implement symbol.search. so, with my object i am not disturbing the
// global symbol.search. My created object is uniquely using symbol.search in it.
//  But we can not delete it
function myFunc() {
    const PVT = Symbol("my private value");

    return {
        notify(obj) {
            obj[PVT] = true;
        },
        output(obj) {
            return obj[PVT];
        },
    };
}

const value = myFunc();
const obj = {a: 1, b: 2};


value.notify(obj);
console.log(value.output(obj));
console.log(obj);
// output: true
// { a: 1, b: 2, [Symbol(my private value)]: true }.So i was sending an object in value.notify and it is setting a symbol
// property and value is giving as true. so, i was sending an object with the help a function this object after modification
// a symbol property is adding and returning it to me.