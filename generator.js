// what is generator? It is nothing but a special type of iterator. Generator means which can produce something. 
// basically it will produce elements of iterable object one by one.
// Making object iterable
// let object = {
//     value : 1,
//     value : 2,
//     value : 3,
//     value : 4
// };
// for (let element of object){
//     console.log(element);
// }
// console.log(...object);
// output: object is not iterable. Now we will make the object iterable. To do this ---1. Insert the function symbol.iterator() inside the prototype
// of the object because there is no symbol.iterator() inside the prototype of an object. Now there will be a function of this symbol.iterarot
// object.entries convert the object's properties into an array.
// Object.prototype[Symbol.iterator] = function() {


// Example 2 Range function
// /function range(start, end, step) {
//     let current = start;
//     return {
         
//         [Symbol.iterator] : function() {
//             return {
//                 next(){
//                     let result;
//                     if (current <= end) {
//                         result = {
//                             done : false,
//                             value : current,
//                         };
//                         current += step;
//                         return result


    //                 }
    //               return {
    //                   done : true,
    //               }
    //             }
            
    //             }

    //         }
    //     };
    // }
    // console.log([...range(1,30,2)]);
    // syntax of generator
    /* function* generator(){
        yield 1;

    }
    we generally return object from a function. But generator is a special type of function which produce value one by one
    by using  the iterator.
    Here, insetad of  return we will use yield.This yield give us the value and return stop the iteratioon.
    // Quick recap of iterator
    let numbers = [1,2,3];
    we know array is iterable. so from any iterable like array, string or our custom iterator can give an iterator. if 
    we want then we can bring out this iterator(the process of iteration is called iterator) and can use it according to 
    my reqirement and can get each element of the iterable one by one calling the next() method.
    now to get the iterator from an iterable we have to call the [symbol.iterator]() function.
    //  By using symbol.iterator we can make an non-iterable object. generally object is not an iterable thing but we can
    make this object iterable by inserting symbol.iterator into its prototype and then we can use spread operator and for...of
    loop to iterate object.
    Ex: 
    let object = {
        value1 : 1,
        value2 : 2,
        value3 : 3,
        value4 : 4
    }
    for(let element of object){
        console.log(element)
    }
    or,
    // console.log([...object]) 
    // output: object is not iterable
    but if we write ---
    console.log({...object});
    // output: {value1:1, value2:2, value3:3, value4:4 }
    How to make an object iterable:
    1) insert symbol.iterator inside the prototype of the object because it is absent in the prototype of any object.
    2) Now there will be a function of this.which will return an object.
    3) And there will be an implementation of next() in it. This next function will return done: false, value:1,2,3,4
    Ex: 
    function* generator(){
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
    // calling generator
    // output:
