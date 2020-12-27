// javascript copywithin method. Its an array method.This methoe accepts three parameter copywithin(target, start, end).Actually
// it copy the elements between start and end then copy it and paste this in the target position.But if any element 
// present in the target position then delete it and paste the copied element.Herw all the positions are positive but positions
// can be negative also.Here we have to remember this things: 1. target is required 2.Start is always default to 0 . so 
// it is optional. if i do not give any value then default value will be 0. 3.end is default to array.length. it means 
// if i do not mention the end value then by default it will consider the value as array.length. 4. It will never change 
// the array length. 5. It overwrite the original array 6. It return the modified array.
let a = ["javascript", "python", "Ruby", "Php", "java", "Typescript", "Deno", "Nodejs"];
// a.copyWithin(2,3);
// console.log(a); 
/* output: [
  'javascript',
  'python',    
  'Php',       
  'java',      
  'Typescript',
  'Deno',      
  'Nodejs',    
  'Nodejs'     
] */
a.copyWithin(3);
console.log(a);
/* output: [
  'javascript',
  'python',
  'Ruby',
  'javascript',
  'python',
  'Ruby',
  'Php',
  'java'
]*/






