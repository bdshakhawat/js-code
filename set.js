// In javascript we deal with object and array but besides this there are some other data structures are available in javascript
// to work with. Like set, weak set,weak mats etc.Every data structures have their own use case.Today we will discuss 
// about the use, syntax and some cool tricks.

// ***What is set? ******Set is an array like data structure but not array.This is used to store unique data.We know there are
// two types of data one is primitive type and another is reference type. set is a reference type data.
function log (anything) {
    return console.log(anything);

}
// literel syntax of array
// let myArray = [];
// Constructor syntax of array
// let myArray = new Array
// So we see here that array can be written in two format literel and constructor format. But set can't be written as 
// literel format it can only be written as constructor format.
// let mySet = new Set();
/*log(mySet); output:
add: ƒ add()
clear: ƒ clear()
constructor: ƒ Set()
delete: ƒ delete()
entries: ƒ entries()
forEach: ƒ forEach()
has: ƒ has()
keys: ƒ values()
size: (...)
values: ƒ values()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.toStringTag): "Set"
get size: ƒ size()
__proto__: Object

// now our set is blank. 
// Think about array. if i want to add new element in an array then 
// myArray[0] = 1;
// myArray[1] = 2;
// myArray[2] = 3;
// console.log(myArray);
// output: [ 1, 2, 3 ]. But in set we can't insert data like array. In this case we have to use any method of set.If we see 
// inside the prototype of set then we get some method of set like, add(),clear(),set(),delete(), entries(),forEach(),has(),values()etc.
// now by using the add() method of set prototype we can add new element insede set.*/
// mySet.add(3);
// mySet.add(1,32,50);
// mySet.add("Bangladesh");
// mySet.delete("Bangladesh");
// log(mySet);
// output: 1.{3}, 2. { 3, 1 } in second set only first element will take Set(1) {1}[[Entries]]0: 1value: 1size: (...)__
// proto__: Setadd: ƒ add()clear: ƒ clear()constructor: ƒ Set()delete: ƒ delete()entries: ƒ entries()forEach: ƒ forEach()
// has: ƒ has()keys: ƒ values()size: (...)values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): 
// "Set"get size: ƒ size()__proto__: Object.  3.Set(3) { 3, 1, 'Bangladesh' }.  Set(2) { 3, 1 }



// **Now when you are using this methods then it will return the set and thus we can chaining the set.

// mySet.add(1).add("Shakhawat").add(2).add("Hossain").delete(2);
// log(mySet);
// output: { 1, 'Shakhawat',  'Hossain' }
// log(mySet.size);
// 3 elements 


// ***set from array  or converting array into set*****
// let myArray = [1,2,3,4];
// let mySet = new Set(myArray)
// log(mySet);
// output: { 1, 2, 3, 4 } ***we can pass any iterable inside a set***So, sets are iterable.
// for (let value of mySet) {
//     log(value);
// }
/* output: { 1, 2, 3, 4 }
1
2
3
4  set has no order but array has order*/ 
// ***Converting set into array by using spread operator  and from method  Array.from(mySet)****
// log([...mySet]);
// output: [ 1, 2, 3, 4 ]
// log(Array.from(mySet));
// output: [ 1, 2, 3, 4 ]


// ***some uses of set*****1. to bring unique element.No duplicate element will be added.
// let a = new Set([1,2,3]);
// let b = new Set([4,3,2]);

// let union = new Set([...a,...b]);
// log(union);
// output: { 1, 2, 3, 4 }. now intersection
// let intersection = new Set([...a].filter(x=> b.has(x)));
// log(intersection);
// output: { 2, 3 }  common items
// let difference = new Set([...a].filter(x=> !b.has(x)));
// log(difference);
// { 1 } this item is not common in two array

// ****weak set*****
const ws = new WeakSet();
log(ws);
/* output: [[Entries]]
No properties
__proto__: WeakSet
add: ƒ add()
constructor: ƒ WeakSet()
delete: ƒ delete()
has: ƒ has()
Symbol(Symbol.toStringTag): "WeakSet"
__proto__: Object . we see here there are only three methods add(),  delete() and has()  In set we can add any iterable things. But in 
weakset we can only add an object{}. weakset is not an iterable object . It will take iterable but he himself is not iterable*/
ws.add({a:1});










