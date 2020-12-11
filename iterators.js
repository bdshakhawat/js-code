// ES6 iterator. when we use loop in arrays and objects then sometimes then browsers hang. To solv this problem javascript
// ES6 iterator has been introduced.
// Here is a simple array and a for loop which syntax is for(initial; condition; increment){....}
/*let array = [1,2,3];


for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// output: 1,2,3 */
// But we can get the same result by using
// now i do the same thing for object then it is not possible to go through an object. so first of all i have used
// object.entries(objecc) to make an array of the entries of the object.Then with this array i have used for loop 
// let object = {
//     cowboy : "Nasim",
//     nerd : "Robin",
//     smiling : "Rafique",
// };

// let entries = Object.entries(object);
// [["cowboy", "Nasim"],["nerd", "Robin"],["smiling", "Rafique"]]
// for (i= 0; i < entries.length; i++) {
//     console.log(entries[i][1]);
}
// Nasim   Robin    Rafique
// Now to get the same result i write the first for loop in this way by using for....of
// let array = [1,2,3];


// for (let element of array) {
//     console.log(element);
// }
// output: 1,2,3 
// Now if i want to use the same thing by using for...of then the output
// will be "object is not iterable".
/*let object = {
    cowboy : "Nasim",
    nerd : "Robin",
    smiling : "Rafique",
};
for (let element of object) {
    console.log(elememt);
}
// output: object is not iterable */
// now lets try it for string
let name = "javascript";

for(let element of name) {
    console.log(element);
}
/* output: {
    j
    a
    v
    a
    s
    c
    r
    i
    p
    t
    so, string is iterable and array is iterable but object is not iterable and number is not iterable.
    
}*/
//  now why this happen? based on which it take dicision that which one is iterable and which one is not.let's see--
// let array = [1,2,3];

// console.dir(array);
// if we do console.dir(array) then we will see that inside the proto of array there is a thing symbol.iterator
// but if do console.dir(object) then we will not see any symbol.iterator here

// let object = {
//     cowboy : "Nasim",
//     nerd : "Robin",
//     smiling : "Rafique",
// };
// console.dir(object);
// so, the thing which contain symbol.iterator is iterable like array,string and which thing does not contain symbol.iterator
// will not be iterable like object, number.So, the term iterable is clear now.
//  what is iterator?
let array = [1,2,3];


for (let element of array) {
    console.log(element);
}
//  here what is hapening? in first step getting the first element 1, then second element 2, then third element 3.This
// every individual step is known as iteration. Iterable means through which you can travel or go through or you can 
//  read step by step means the owner and after entering inside by which mechanism javascript is supplying the element
//  is called iterator. To do this in every iteration step javascript call the symbol.iterator()function.
// ***What is iterable protocol?****
//  To become iterable which rules should be followed?Javascript set some rules to become an iterable.This is known as iterable
//  protocol. 1.Must have a symbol.iterator function property. 
// 2. The function must return an iterator when called. Now let's see what is return by this.

// now if i want to access the property of this array then we can write array[symbol.iterator ].bcause we know we can access
// any element of array like this and symbol.iterator is a property of array insid the proto.This array[symbol.iterator]()
// return an  iterator after calling.
// *****So, there is a function named symbol.iterator()  inside every iterable's (iterable means through which we can
// travel and access its properties like array,string but non-iteravles does notpermit to access its and do looping its
// vales like object,number etc) proto .When we call this symbol.iterator() then we will get an iterator.
//  in this example arry=[1,2,3] is an iterable and inside it's proto there is a function named [symbol.iterator].now
// i have called this function [symbol.iterator]() and it is giving an out ***Array iterator***.

/* let array = [1,2,3];
// let iterator = array[Symbol.iterator]();
// console.dir(iterator);
// Array iterator
 Now if i open this "Array iterator" then i will get an "next" method----(from google chrome consol)
Array Iterator
__proto__: Array Iterator
next: ƒ next()
Symbol(Symbol.toStringTag): "Array Iterator"
__proto__: Object.     */


/*  Now if is call the function next() then is will get--
 let array = [1,2,3];
 let iterator = array[Symbol.iterator]();
 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());
//  output: {value: 1, done: false} this means it is giving an object whosw properties are value and done.It means it is 
//  donating us the iterator as an object and we can use it as we like.When i was using for....of by default it is calling
// this symbol.iterator function again and again but javascript is giving me this iterator saperately and if i want i can 
// bring it out and can change the behaviour of the for...of by using this symbol.iterator function.
// so, if i call the 'next()' function first time then i will get the first value of array = [1,2,3] as output like
// {value: 1, done: false} if i call it second time and third time then i will get the second and third value of 
array = [1,2,3] as output like// {value: 1, done: false}, {value: 2, done: false}, {value: 3, done: false     */





