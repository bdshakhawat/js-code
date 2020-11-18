

// var x=20;
// global scope
// function myFunc() {
//     // local scope
//      x=10;
//     console.log(`${x} from myFunc ()`);
// }
// myFunc();
// console.log(x); output : 10 because it will change the global var x=20 to 10
// But if i use var then it will be a different variable then console.log output will be 20.
// function myFunc() {
//     // local scope
//      var x=30;
//     console.log(`${x} from myFunc ()`);
// }
// myFunc();
// console.log(x);
// Now it will consider local variable into x=10 as window variable by default and output will be 10.

// function myFunc() {
//     // local scope
//      x=10;
//     console.log(`${x} from myFunc ()`);
// }
// myFunc();

// console.log(x);

// But if i write "use strict " then local variable x=10 can't be use as global variable thus give error
// "use strict";

// function myFunc() {
//     // local scope
//      x=10;
//     console.log(`${x} from myFunc ()`);
// }
// myFunc();
// console.log(x);