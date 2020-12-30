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
// const children = document.querySelectorAll('.item');
// const parent = children.parentElement;
// console.log(parent);
// output: ul element



// ******children to grandparent****Ascending order*****
// const children = document.querySelector('.item');
// const grandparent = children.closest('.todo-list');
// closest  method go down to up. Firstly it search todo-list class in parent
// if not found then go to upper in grandparent and after finding return this.
// output: div




/* ******Holding siblings(brother and sister)****descending order*****

const childrenOne = document.querySelector('.item');
const childrenTwo = childrenOne.nextElementSibling;
childrenTwo.style.color = "red"; */



/* ******Holding siblings(brother and sister)****Ascending order*****

const childrenTwo = document.querySelector('.item');
const childrenOne = childrenTwo.previousElementSibling;
childrenOne.style.color = "red"; */






/* *****Manupulaing DOM*******creating, changing and deleting element********
// ***How to create an DOM element dynamically*****
const divElement = document.createElement("div");
// console.log(divElement);
// output: div    within this div all object properties and methods are present.
// setting class and id for any html element
divElement.className = "red";
divElement.setAttribute("id", "red");
divElement.setAttribute('title', 'Red Div');
// Now class and id has been created dinamically but now i can set this class and id
// at any place in the html file.To do this---say i have to set this class and id between
// div "container" and h2. To do this first hold the "div" first then hold the h2 tag by querySelector. Now to insert this class and id 
// use .insertBefore method which will take two parameter  1. the element i want to insert here class name and id 2.the name of the element 
// before which i want to insert this element.
// Now hold the "div" and h2 tag
const container = document.querySelector('.todo-list');
const h2Element = container.querySelector('h2');
container.insertBefore(divElement, h2Element);
// output: div class "red" and id "red" will be added  between div and h2.  */





/* ***Adding class or id attribute at the end of a div element append child******Now i want to add class and id at the end of the container 

const divElement = document.createElement("div");
divElement.className = "red";
divElement.setAttribute("id", "red");
divElement.setAttribute('title', 'Red Div');

const container = document.querySelector('.todo-list');
container.appendChild(divElement);
// output: div class will be added at the end of the container. we can also add this with container.append(divElement); but there is a 
differece between append and appendchild. 1. Append  can add any text as well as class and id but appendChild can add only html element or node 
class or id not any text 

2. append child return the element but append does not return anything 
// const a = container.append(divElement); console.log(a)  /return  undefined  
   const b = container.appendChild(divElement); console.log(b) / return  div element.

3. with append we can use multiple element, text 
 container.append(divElement, document.createElement("p"), "Hello world"); / output: all three things added
 container.appendChild(divElement, document.createElement("p"), "Hello world"); /output: only first element  div will be included 

*/




/*  ************Event Handler***********when we create any application then we need to handle different types of user activity for example
user click on any button, or click on any item of the application or can do anything with mouse or can do any work with keyboard.So, the
actions taken by the users on an application. This actions on the web page has some defined events and thus when any actions happen on  the 
web page of any application then it gives an event and we can listen this event.This is called event listening.For example in ou application
'Todo-app' when any user click on the "Add Task" button then javascript DOM by default fire an event named 'click' event then by listening 
this event we can get different information.Now to work on a section of my "todo APP" givw an id and class named "header" . I want to listen
event onclick on this section when any one click on the todo-app.so, firstly, i have to hold this section---*/


/*  single click event        
const headElement = document.querySelector("#header");
// secondly, i have to add a function to lisetn event from headElement when it click by using an in built function of javascript named addEvent
// listener.This function will take two parmeter.1.As first parmeter it will take "which event i want to hear like click" 2. After listening 
// the event what i will do? it means js expect a function of doing something with the event.So, second parameter will be a function and this 
// function get the event as his parameter.
headElement.addEventListener('click', ()=> {
    console.log(event);
})
/* output: MouseEvent {isTrusted: true, screenX: 660, screenY: 189, clientX: 660, clientY: 86, …}
path: Array(6)
0: h1#header.header
1: section.container
2: body
3: html
4: document
5: Window  now inside this event we will get various properties and methods by which we can do many things.Now if we click on the button
then we will get different event methods and properties. so, different unique item will give different event properties and methods*/



/*            ***************Double click event*******************************
const headElement = document.querySelector("#header");
headElement.addEventListener('dblclick', ()=> {
    console.log(event);
})

output:   MouseEvent {isTrusted: true, screenX: 668, screenY: 187, clientX: 668, clientY: 84, …}
altKey: false
bubbles: true
button: 0
buttons: 0
cancelBubble: false
cancelable: true
clientX: 668
clientY: 84
composed: true
ctrlKey: false
currentTarget: null
defaultPrevented: false
detail: 2
eventPhase: 0
fromElement: null
isTrusted: true
layerX: 373
layerY: 59
metaKey: false
movementX: 0
movementY: 0
offsetX: 345
offsetY: 12
pageX: 668
pageY: 84
path: (6) [h1#header.header, section.container, body, html, document, Window]
relatedTarget: null
returnValue: true
screenX: 668
screenY: 187
shiftKey: false
sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
srcElement: h1#header.header
target: h1#header.header
timeStamp: 5751.004999969155
toElement: h1#header.header
type: "dblclick"
view: Window {window: Window, self: Window, document: document, name: "", location: Location, …}
which: 1
x: 668
y: 84
__proto__: MouseEvent        */




/*   ************Mouse down*************hold the mouse by clicking on "todo app" *********************
const headElement = document.querySelector("#header");
headElement.addEventListener('mousedown', ()=> {
    console.log(event);
})

output: MouseEvent {isTrusted: true, screenX: 668, screenY: 184, clientX: 668, clientY: 81, …}
altKey: false
bubbles: true
button: 0
buttons: 1
cancelBubble: false
cancelable: true
clientX: 668
clientY: 81
composed: true
ctrlKey: false
currentTarget: null
defaultPrevented: false
detail: 1
eventPhase: 0
fromElement: null
isTrusted: true
layerX: 373
layerY: 56
metaKey: false
movementX: 0
movementY: 0
offsetX: 345
offsetY: 9
pageX: 668
pageY: 81
path: (6) [h1#header.header, section.container, body, html, document, Window]
relatedTarget: null
returnValue: true
screenX: 668
screenY: 184
shiftKey: false
sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
srcElement: h1#header.header
target: h1#header.header
timeStamp: 12039.894999936223
toElement: h1#header.header
type: "mousedown"
view: Window {window: Window, self: Window, document: document, name: "", location: Location, …}
which: 1
x: 668
y: 81
__proto__: MouseEvent   */



/*      ******Mouse Up***hold the mouse by clicking on "todo app"  and realease it. At the time of realeasing event will happen***

const headElement = document.querySelector("#header");
headElement.addEventListener('mouseup', ()=> {
    console.log(event);
})

output: 
MouseEvent {isTrusted: true, screenX: 669, screenY: 189, clientX: 669, clientY: 86, …}altKey: falsebubbles: 
truebutton: 0buttons: 0cancelBubble: falsecancelable: trueclientX: 669clientY: 86composed: truectrlKey: 
falsecurrentTarget: nulldefaultPrevented: falsedetail: 1eventPhase: 0fromElement: nullisTrusted: 
truelayerX: 374layerY: 61metaKey: falsemovementX: 0movementY: 0offsetX: 346offsetY: 14pageX: 669pageY: 86path: 
(6) [h1#header.header, section.container, body, html, document, Window]relatedTarget: nullreturnValue: 
truescreenX: 669screenY: 189shiftKey: falsesourceCapabilities: InputDeviceCapabilities
 {firesTouchEvents: false}srcElement: h1#header.headertarget: h1#header.headertimeStamp: 8636.68500003405toElement:
 h1#header.headertype: "mouseup"view: 
Window {window: Window, self: Window, document: document, name: "", location: Location, …}which: 1x: 669y: 86__proto__: MouseEvent */





/*   ******Mouse Enter***when the mouse will appear on the "todo app' then the event will take place***

const headElement = document.querySelector("#header");
headElement.addEventListener('mouseenter', ()=> {
    console.log(event);
})

output:
MouseEvent {isTrusted: true, screenX: 633, screenY: 201, clientX: 633, clientY: 98, …}altKey: falsebubbles: 
falsebutton: 0buttons: 0cancelBubble: falsecancelable: falseclientX: 633clientY: 98composed: truectrlKey:
 falsecurrentTarget: nulldefaultPrevented: falsedetail: 0eventPhase: 0fromElement: section.containerisTrusted: 
 truelayerX: 338layerY: 73metaKey: falsemovementX: 0movementY: 0offsetX: 310offsetY: 26pageX: 633pageY: 98path: 
 (6) [h1#header.header, section.container, body, html, document, Window]relatedTarget: section.containerreturnValue: 
 truescreenX: 633screenY: 201shiftKey: falsesourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}srcElement: 
 h1#header.headertarget: h1#header.headertimeStamp: 2730.4750001057982toElement: h1#header.headertype: "mouseenter"view: 
Window {window: Window, self: Window, document: document, name: "", location: Location, …}which: 0x: 633y: 98__proto__: MouseEvent */





/*     ******Mouse leave***when the mouse will leave from the "todo app' after apearing then the event will take place***
const headElement = document.querySelector("#header");
headElement.addEventListener('mouseleave', ()=> {
    console.log(event);
})

output:
MouseEvent {isTrusted: true, screenX: 658, screenY: 204, clientX: 658, clientY: 101, …}altKey: falsebubbles: falsebutton: 0buttons: 
0cancelBubble: falsecancelable: falseclientX: 658clientY: 101composed: truectrlKey: falsecurrentTarget: nulldefaultPrevented: falsedetail:
 0eventPhase: 0fromElement: h1#header.headerisTrusted: truelayerX: 363layerY: 76metaKey: falsemovementX: 0movementY: 0offsetX: 335offsetY: 
 29pageX: 658pageY: 101path: (6) [h1#header.header, section.container, body, html, document, Window]relatedTarget: 
 section.containerreturnValue: truescreenX: 658screenY: 204shiftKey: falsesourceCapabilities: InputDeviceCapabilities 
 {firesTouchEvents: false}srcElement: h1#header.headertarget: h1#header.headertimeStamp: 7898.419999983162toElement: section.containertype: 
 "mouseleave"view: Window {window: Window, self: Window, document: document, name: "", location: Location, …}which: 0x: 
 658y: 101__proto__: MouseEvent    
 Like this "mouse over,  mouse out, mouse move*/




/*  Difference between mouse over,leave and mouse enter,out.
mouse over fire event on the parent element as well as its child element but mouse enter fire event only on parent element

//  *****Some other important event***** Let's take the input area of todo  app***** */



/*    *******work with "input" element****
const inputElement = document.querySelector('input [type="text"]');


inputElement.addEventListener("keydown" , (event) => {
    console.log(event);
})

// output: keyboard event  like this "keyup"--after pressing realease it. "keypress"---just press a key.
// "focus"---just click. blur---after focusing click outside to blur.  "cut"---select and press. "paste"---click to paste anything. 
// "input" any type of input can be given.*/ 





//    *******work with "form" element****
const formElement = document.querySelector('input [type="text"]');


formElement.addEventListener("submit" , (event) => {
    event.preventDefault();
    console.log(event.target.value);
})
//  output: submit event then give the targeted elements value.
// ***********Finally follow the w3schools  javascript DOM element tutorial.***************HTML DOM list********





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












