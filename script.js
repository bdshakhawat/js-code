// *****GetElementById*********This method is found inside the prototype chain of master Document.
//    ***console.dir(document);*****
/*  Now we will get many methods and properties.
// because it is an object.getAnimations: ƒ getAnimations()
getElementById: ƒ getElementById()
getElementsByClassName: ƒ getElementsByClassName()
getElementsByName: ƒ getElementsByName()
getElementsByTagName: ƒ getElementsByTagName()
getElementsByTagNameNS: ƒ getElementsByTagNameNS()
getSelection: ƒ getSelection()
hasFocus: ƒ hasFocus()
hasTrustToken: ƒ hasTrustToken() like this millions of properties and methods*/

// ********console.log(document.getElementById("header"));********
// output: <h1 id="header"> To-do app</h1> I am getting the whole element.

/*  *****let headerElement = document.getElementById("header")*********
// console.log(headerElement);
// output: <h1 id="header"> To-do app</h1> I am getting the same element.*/


// let headerElement = document.getElementById('header')
// headerElement.innerText = "not changed";
// output: not changed.
// console.log(headerElement.innerText);
// output: TO-DO (Browser presentation with css)
// console.log(headerElement.textContent);
// output: To-do app(It will show only the html original writing abd ugnor the css styling)
// console.log(headerElement.innerHTML);
// output: To-do <span>app</span> this is text 
// console.dir(headerElement);

// output: neumerous methods and properties are there inside the "headerElement". so i can change it by using its methods and properties.
// headerElement.style.color = "green";
// output: The color of the text will be 'green'. This is javascript not css.So, to write code here we have
// to maintain the javascript syntax. For example--
// headerElement.style.textTransform = "lowercase";
// output: to-do  text becomes lowercase.But if i use it like  text-transform  then it will give error.
// because text-transform is "CSS" syntax. Actually the "CSS" code we write is finally converted into javascript
// code like:  text-transform  into   textTransform to execute or show in the browser.
console.log(document.getElementsByClassName("para"));
/* output: HTMLCollection(2) [p.para, p.para]
0: p.para
1: p.para
length: 2
__proto__: HTMLCollection
item: ƒ item()
length: (...)
namedItem: ƒ namedItem()
constructor: ƒ HTMLCollection()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.toStringTag): "HTMLCollection"
get length: ƒ length()
__proto__: Object  this array like object but not array and we can access it like array but this is not array.*/

// console.log(document.getElementsByClassName("para")[0]);
// output: <p1 class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, possimus?</p1>


// *****************console.log(document.getElementsByClassName("para")[1]);********
// output:<p2 class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, minima numquam.</p2>. 
// I can do loop with it like
let para = document.getElementsByClassName("para")
for (i=0; i< para.length; i++){
    para[i].style.color = "red";

}
// ****But any array methods will not work here*****





