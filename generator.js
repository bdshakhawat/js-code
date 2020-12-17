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
// output: object is not iterable. Now we will make the object iterable. To do this ---1. Insert the function symbol.iterator() inside the prototype
// of the object because there is no symbol.iterator() inside the prototype of an object. Now there will be a function of this symbol.iterarot
// object.entries convert the object's properties into an array.
// Object.prototype[Symbol.iterator] = function() {


// Example 2 Range function
/function range(start, end, step) {
    let current = start;
    return {
         
        [Symbol.iterator] : function() {
            return {
                next(){
                    let result;
                    if (current <= end) {
                        result = {
                            done : false,
                            value : current,
                        };
                        current += step;
                        return result


                    }
                  return {
                      done : true,
                  }
                }
            
                }

            }
        };
    }
    console.log([...range(1,30,2)]);
