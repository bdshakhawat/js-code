// Converting object into array
var myObj = {
    name : "Javascript",
    founder : "Brendan Eich",
    estd : "1995",
    ranking : 1
}
// Now i need to pick the keys of the object
var keys = Object.keys(myObj);
console.log(keys);
// output: [ 'name', 'founder', 'estd', 'ranking' ]
// ***If i want to get the values then
var values = Object.values(myObj);
console.log(values);
// output: [ 'Javascript', 'Brendan Eich', '1995', 1 ]
// ******If i want the keys and values in an array together then i need to use entries= key + value
var entries = Object.entries(myObj);
console.log(entries);
/* output: [
  [ 'name', 'Javascript' ],
  [ 'founder', 'Brendan Eich' ],
  [ 'estd', '1995' ],
  [ 'ranking', 1 ]
] */
// ******object shorthand(writing in shortcut way).If the global variable name and object keys and values name are same then 
// we can write in shorthand or short way.
var x = 4;
var y = 5;
var z = x * y;
var myObject = {
    name : "javascript";
    founder : "Brendan Eich";
    estd : "1995",
    ranking : 1,
    // X = x,
    // Y = y,
    // Z = z, in this case we can use object short hand like this:
    x,
    y,
    z,


};

