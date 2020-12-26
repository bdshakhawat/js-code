/* spread operator
var numbers1 = [1,2,3];
var numbers2 = [4,5,6];
// var newNumbers = [numbers[0], numbers[1], numbers[2], 3,4];
// but if do this same work by spread operator then it will be more easier. Here i have spreaded the elements of numbers(1 2 3)
// and taken them by their index numbers. if i write like this--
var newNumbers = [...numbers1, ...numbers2];
console.log(newNumbers);
// output: [ 1, 2, 3, 3, 4 ] spread operator can copy immutably.
// [ 1, 2, 3, 4, 5, 6 ] spread operator similarly works in object */
// var myObj = {
//     x=1,
//     y=2
// };
// var myObj1={
//     a=3,
//     b=4,
// };
// console.log({
//     ...myObj,
//     ...myObj1,
// });

