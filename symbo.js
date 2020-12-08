/* Symbol is a premitive type of data having some special type os featureas which was introduced in ES6.when we want to 
create any string then we write  var name = "Javascript"; we create an object we write var object = {
    name: "sumon",
} but we can also write string as  var name = new string(sumon); now we will see how we can write symbol:
var symbol1 = symbol(); Here symbol is a dedicated inbuilt function of javascript. By using this funcrion 
we can create a symbol.Now we can create multiple function by calling this function multiple times.But they are not same
Among the primitive values we can create new number new boolean and new string but we can't create new symbol. The only way
to create symbol is to create it by using symbol()function. All symbols are unique.It doesn't matter how many times 
i will create symbols but every time it will be a unique symbol.So, symbol is always unique and we can not see the value
of a symbol but javascript know this.Single tone means if we can create only one object by using a class then it is called
single ton.But generally with a class object we can create neumerous object. Now by using this concept if i want that
symbol1 and symbol2 will be the same.To do this we have to just write symbol.for()then this two symbol will be same.*/

   /* var name = "javascript";
      var object = {
          name: "javascript"
     }
    var symbol1 = Symbol();
    var symbol2 = Symbol();
    // check whether this two symbol are equal or not
       console.log(symbol1 === symbol2);
      // output: false              */


//  now check this two symbol individually then they will look like same
/*  var symbol1 = Symbol();
    var  symbol2 = symbol();
    console.log(symbol1);
    console.log(symbol2);                   */

/*     var symbol1 = symbol("I am symbol 1");
var symbol2 = symbol("I am symbol 2");


console.log(symbol1);
console.log(symbol2);
output: I am symbol 1   and I am symbol 2.                */
var name1 = symbol.for("name 1");
var name2 = symbol.for("name 2");
console.log(name1 === name2);
    

