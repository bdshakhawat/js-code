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
 console.log(iterator.next());
//  output: {value: 1, done: false} this means it is giving an object whosw properties are value and done.It means it is 
//  donating us the iterator as an object and we can use it as we like.When i was using for....of by default it is calling
// this symbol.iterator function again and again but javascript is giving me this iterator saperately and if i want i can 
// bring it out and can change the behaviour of the for...of by using this symbol.iterator function.
// so, if i call the 'next()' function first time then i will get the first value of array = [1,2,3] as output like
// {value: 1, done: false} if i call it second time and third time then i will get the second and third value of 
array = [1,2,3] as output like// {value: 1, done: false}, {value: 2, done: false}, {value: 3, done: false . Now if
i call it fourth time then the output will be : {value:undefined, done:True} that means there is no item to assign value
and done "true" means the iteration is complete. 
Now if i want i can return another object by the next() function then i can change the for.....of */


//***** Iterator Protocol****
// 1. It must be an javascript object. 02. It needs to implement a next() method and have to return an object with done and value property.
// Now, we know arry comes from big Array and inside this array there is a symbol.iterator()function inserted by javascript
// now if we create our own data type like array=[1,2,3] and insert the function symbol.iterator() in it and if it 
// symbol.iterator() is a function and it has an implementation of next() function in it and can 
//  retun an object then my own created data type is also a part of iterator protocol.
// Now if we want to create a custom iterator then we have to write a next() function by ourselves which will return
//  an object with two properties. one is 'value' which will take the elements from iteratable object or any js value by maintaining 
// the order and second property will be "done" which will take either fasle or true. If the operation is done then
// it take true only one time after finishing the operation and other than this as long as the operation will be 
// continued it will take a false value every time.Here i have the liberty that i can take the third value first then ninth
// value and whatever value i need.In case of for loop i need to think about the whole array rather with the iterator i can
// think only about a single element of the array to use according to my requirement.
// now lets see an example of string
// "javascript"[Symbol.iterator]().next()
// output: {value: "j", done: false}



// *******Lets make a custom iterator**********spread operator works only in iterator.The function of spread operator 
// is to bring out the elements from any iterable by spreading.For example:


/*         console.log([..."Hello"]);
// (5) ["H", "e", "l", "l", "o"]
0: "H"
1: "e"
2: "l"
3: "l"
4: "o"
length: 5
__proto__: Array(0)  spreaded all the letters from the string with their index number and gives an array of letterw. */
// In this case spread operator call the symbol.iterator() and bring out all the elements from the iterable string but 
// in case of number it will give error because number is not iterable. so spread operator is not applicable for non-iterable object.

// Now lets change this global behaviour of iterator and will create a custom iterator. Now i want that when 
// spread operatoe will go through the string and return letters but then we will another thing instead of letter.
// now to do this we need to change or overwrite the symbol.iterator() inside the prototype of the big string or new string or object
// representation of string.Because to iterate spread operator use this method . If i change this sybmbol.iterator() then the 
// behaviour of the 'spread operator' will be changed.
// To do this write big string of prototype of symbol.iterator menans  String.prototype[symbol.iterator]. It is a function.
// so write this function by my own.
/*String.prototype[Symbol.iterator] = function() {

    // have to follow the iterator protocol 1. retunr an object
    let count = this.length;
    // here i will get the length of the string.
    return {
        // 2. must have the implementation of next() function
        next(){
            // it will return {value:"js", done:true/false}. now i want that in every iteration i will get the same value
            // js but i will send "Hello" and it consist five letters and will be iterate five times but will return js five times 
            // instead of H  E  L  L  O it will give output   js  js   js   js  js.
            // here i will check how long this counting will be continued.It will be continued till the value is greater than zero and will return
            // done: false/true value:js
            if(count>0){
                count --;
                return  {done:false, value:"js"}        
                
            }
            return {done:true};
            


        }

    }

}


console.log(..."Hello");
// js js js js js
// Example 2 our custom iterable and iterator.Now we will create a custom iterable like array,string etc. and for this iterable i will create an iterator also.
// I want to use this range function in spread operator.We know spread operator works with any type of iterable.so, it will also work with 
// our range() function.So, my moto is to call the range function like [...range]because range function return an iterable and spread function
// will work on it.Now start will 1 and end will 30 and the difference 2 that means 1,3,5,7....like this.So, i have to pass three parameter like
// start, end and step
function range(start, end, step) {
    let current = start;
    // Firstly it should return an object. So, take a function which will return an object
    return {
        // Inside the object there will be a function named symbol.iterator 
        [Symbol.iterator] : function() {
        // Now it should return or implement a next()method
        return {
            next() {
                let result;
                // it will run until the value of current is less than end and plus 2 with the current value
               if (current <= end) {
                   result = {
                       value : current,
                       done :  false
                   };
                
                //    now return done = false and value = current
                // return{
                //     done : false,
                //     value : current
                // };
                // now add current with step. But i can not add step with current because i was returning first and will not get the value
                // of current.So, we can keep the value of return into a variable and can use it to add with step.
                current += current + step;
                return result;

                


            }
            return {
                done : true,
            }

                // This next()method will have to retunn an object which will have two properties value and done.In case of iterator i have to think
                // for each step.so, we will take 1 then plus 2 get the result 3 and plus 2 get the result 5 plus 2 and go on and on.To do this
                // every time i have to work on a current value. now set a condition

            }
        }
        }
    }
}
console.log([...range(1,30,2)]);           */
// output: [1,3,5,7,9,11,13,15,17,.....29]
function range(start, end, step) {
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
        }
    }
    console.log([...range(1,30,2)]);













