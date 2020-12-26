// Rest operator. spread operator and rest operator are same but according to their place of use they are named so
// when i will use tripple dot then it will work as rest operator
// function myFunc(a,b){
//     console.log(a,b);

// }
// myFunc(3,4);
// output: 3,4. but if i don't know how many values the user will put then to catch aoo the values we need to use rest operator.
/* before rest operator we can do this by argument in the form of an object. actually when we send any parameter from outside then all the parameters
// will be stored in arguments which is a default property of function.Then by using for..of inside the object i can iterate
//  through the object and can use it.But rest operator made this task simple.Now if i write like this---
function myFunc(a, ...params){
    console.log(params);
    console.log(a);
}
myFunc(1,2,3,4,5);
// output: [ 1, 2, 3, 4, 5 ] its an array.
// [ 2, 3, 4, 5 ]
1    */
// but if i use function(...params , a) then it will give error because ...params must be the last parameter
// and rest parameter can be used only once .if i write function(...params, ...params) then it will not work




