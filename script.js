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
// console.log(document.getElementsByClassName("para"));
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
// let para = document.getElementsByClassName("para")
// for (i=0; i< para.length; i++){
//     para[i].style.color = "red";

// }
// ****But any array methods will not work here*****

// now if i want to use style in a particular class element then i have to specifically hold the p1 first then i have to hold the class name.
// let itemsUi = document.getElementById('items');
// console.log(itemsUi);
// let itemed = itemsUi.getElementsByClassName('item');
// console.log()
// for(let i=0; i<itemed.length; i++) {
//     itemed[i].style.color = "green";
// }

//  ***********getElementByTag******
// let items = document.getElementsByTagName("li");
// console.log(items);
/* output: HTMLCollection(5)
0: li.item
1: li.item
2: li.item
3: li.item
4: li.item
length: 5
__proto__: HTMLCollection  it is also an iterable element*/

// ****************query selector**********Alternative of jquery.This query selector do the same thing done by the jquery.
// let header = document.querySelector('#header');
// console.log(header);
// output:  <h1 id ="header"> To-do <span>app</span>  </h1> so we can find elements by passing "CSS" selector in it.Like this
//  we can hold any element by query selector.Now i want to hold the last li then---
// let lastitem = document.querySelector('.item:last-child');
// lastitem.style.color = "red";
// query selector fall from up to down.QuerySelector return only one element
//  of first matched item.If we use id . as selector then no problem
// but if we use class and there are multiple same classes then it will return only the first matched class item.
// Now if want to get all the last child of the DOM then i have to use querySelectorAll then run a for of to do anything by this
// like let lastitems = document.querySelectorAll('.item:last-child);
/* for(let element of lastitems){
    element.style.color = "red";

}
now if i want to find n-th child---
let lastitem = document.querySelector('.item:nth-child(2,3etc)')
lastiem.style.color = "red";
***But i can also do it another way: firstly i hold the ul element by using document.querySelector then again use ul.querySelector to hold nth
child of ul.******
let lastitem = document.querySelector('#items');
querySelector('.item:nth-child(3));
lastitem.style.color = "red"
output: third li will be red.







/*       ******DOM Hierarchy**********************
while working with DOM we always have to face parent-child relationship.We know DOM is a tree structure.So, here must 
have hierarchy. Now to handle this problem of hierarchy javascript has given us some useful properties and methods.
 HTML example <div class="todo-list box">.In this div h1 and ul tag is child of div again all li are the child of ul
now to hold the li i have to hold ul first then i will hold the li.Here div is grandparent he has two child 'h1' and ul and 'ul' has 3 child 'li'.
*/
// const parent = document.querySelector('#items');
// const children  = parent.children;
// console.log(children);
/* output: HTMLCollection(5)
// 0: li.item
// 1: li.item
// 2: li.item
// 3: li.item
// 4: li.item
// length: 5
// __proto__: HTMLCollection */

/*const grandparent = document.querySelector('.todo-list');
const parent = grandparent.children;
const children = parent[1].children;
console.log(children);
output: same */



// ******Now if i want i can directly go to grandparent to children by decendant order******
/*const grandparent = document.querySelector('.items');
const children = grandparent.querySelectorAll('.item');
console.log(children);
// output: same.*/



// ******children to parent****Ascending order*****
const children = document.querySelectorAll('.item');
const parent = children.parentElement;
console.log(parent);
// output: ul element



// ******children to grandparent****Ascending order*****
const children = document.querySelector('.item');
const grandparent = children.closest('.todo-list');
// closest  method go down to up. Firstly it search todo-list class in parent
// if not found then go to upper in grandparent and after finding return this.
// output: div




// ******Holding siblings(brother and sister)****descending order*****

const childrenOne = document.querySelector('.item');
const childrenTwo = childrenOne.nextElementSibling;
childrenTwo.style.color = "red";


// ******Holding siblings(brother and sister)****Ascending order*****

const childrenTwo = document.querySelector('.item');
const childrenOne = childrenTwo.previousElementSibling;
childrenOne.style.color = "red";








/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 12/17/2020
 *
 

 // select elements & assign them to variables
 let newTask = document.querySelector('#new-task');
 let form = document.querySelector('form');
 let todoUl = document.querySelector('#items');
 let completeUl = document.querySelector('.complete-list ul');


// functions
let createTask = function(task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    // bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}

let completeTask = function() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItems = function(taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

for(let i=0; i< todoUl.children.length; i++ ) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}

for(let i=0; i< completeUl.children.length; i++ ) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);
*/












