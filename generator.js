// what is generator? It is nothing but a special type of iterator. Generator means which can produce something. 
// Making object iterable
let object = {
    value : 1,
    value : 2,
    value : 3,
    value : 4
};
// for (let element of object){
//     console.log(element);
// }
console.log(...object);
// output: object is not iterable