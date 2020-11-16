// var a = 10;
// var b=a;
// var b = 20;
// console.log(a);
// console.log(b);
// var x= {
//     name : "jhon"
// };
// var y = x;
// y.name = "David";
// console.log(y.name);
// console.log(x);
// console.log(x.name);
function vehical (name,maker,engine){
    this.name=name;
    this.maker=maker;
    this.engine= engine;
}
let car = new vehical("GT", "BMW", "2000cc");
console.log(car.name);
console.log(car.engine);

