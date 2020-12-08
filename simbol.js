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
var object = {};
object.name = "javascript";
object.estd = "1995";
object[Symbol("founder")]= "Brendan Eric";
// console.log(object);
// { name: 'javascript', estd: '1995', [Symbol(founder)]: 'Brendan Eric' }

// for(let key in object){
//     console.log(key);
// }
// name  estd. So,we are not getting the symbol key which is hidden. Another way if we chcck like object.keys(object)
console.log(object.keys(object));
// will return all the keys but still we can't see the symbol key. It will remain hidden.
// 


