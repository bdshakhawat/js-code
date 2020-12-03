// when a function call himself inside him is called recursion
// let myFunc = function(){
//     myFunc();
// }
//  Find a cumulative sum of number like: 1+2+3+.......+n
// let total = 0;
// let n = 3;
// for(i=0; i<=n; i++){
//     total += i;
// }
// console.log(total);
// output: 6. Now convert this loop into recursive function

// f(n-1) + n = f(n); 
function sum(n){
    if (n=== 0) {
        return 0;
    } else {
        return sum(n-1) + n;
    }
}
console.log(sum(3));
// console.log(sum(30000000000000));
//  output: as the number is very big it will give error as the memorey limit exceed. This value of call stack size is 
// different for different browser.
// output: 6.
/* now if we breakdown this operation -----
sum(3)
sum(2) + 3;
sum(1) + 2+3;
sum(0) + 1+2+3; 
0+1+2+3 */
// now the best solution will be to use the formulae of n(n-1)/2
let n = 100000;
console.log(n*(n+1)/2);
// output: 5000050000
