// sometimes we need to work with more than one js file in a large project.Now if i want to import something from another 
// js file to my js file or need to use a third party library feature  then  import and export is used. This feature is 
// used in react and node js havily.Aclually ihis feature have opened the way of modular javascript.
// Let this is our play ground or js file and we will bring some fratures from another js file or third party library.
// Now i want to import this two variable pi and a from external.js to my import.js file. 
/* ****now to import this things i have to take a file named package.json and open a module feature of ES6. Like {
    "type" : "module"

}  but in react we need not to open the module package because it is done there by default so we can do import export any
time. But in our case we need to open up the moduler feature to do import and export from another file or third party library
now to import syntex will be import {something} from './file path like external.js' but in react we need not to give the file
extention .js just write the file name. Secondly i have to export the variable from the external.js file. I can import
only the files exported by the external.js file. This is called named import and export. Because i have imported 
them by their name */
// import {pi, a} from './external.js';
// console.log(pi,a);
// output: 3.14    3.9. Here i have exported a variable but i can export anything like function,object or array.
/* But if i don't know what is there in the file and want to import the whole file then 
import * as test from './external.js';
console.log(test);

// output: [Module] { a: 3.9, pi: 3.14 } like an object
console.log(test.a);
// output: 3.9 */

// **I can write in alias way like***
import {pi as varPi, a as varA} from './external.js';
console.log(varPi,varA);
// output: 3.14 3.9




