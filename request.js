/* First of all f have to click on the get-button.so we know by clicking if we want listen or do something then we need to 
take help of addevent listener function of javascript to listen any event of HTML file.That means, by using this addevent 
listener js function we can listen any click happens on a HTML element.To do this,1)firstly i am going to catch the two

button elements by their id with the help of document.getElementbyId.
2) Now let i have a function named getData and in this function i will do my necessary task to get data from external
source. 3) I will take another funnction named sendData whick will be callde when i will press on send-button and within 
this function i will do some activities for sending data to any external source. 4) Now i want to add event listener,to do this
write  getButton.addeventlistener() this function will take two parameter one is which event we want to listen in our case we want
to listen click event so first patamente will be click and second parameter will be, if the click event happen then which fuction
will be called or run which means i have to pass a callback function as second parameter.5) now write the necessary code to get data.To do 
this i)firstly, i will create a request object by using XML Htttp request for this i am taking a variable const shr = new XML Htttp request
that means i was creating an request object.now my request object is done. Now by adding different properties to my request object i will
orepare my object and when my all arrenging of the object will be finished then finally i can send the request. Now to prepare the request
i need to know how many types of request can be. We know there are six types of request:
1. I can do request to get some data from server which is called get request 2.i can request to send some data to the server which is called post.
3. i can request to edit any data in the server which is called put 4. i can delete request to delete data from the server which is called
delete  .5) options 6. Head. Now to prepare the request firstly i need to take help of a method of XMLHttpRequest named xhr.open. This open 
method takes two things as parameter first parameter will be what type of request i want to do like 'get put post delete option head ' and
second parameter will be a 'url' that means from which address he will take this data or to whome he will send the request.There is 
popular url site named json placeholder that provides fake Api for  testing. Now he will hit in this url and get data.Now my request is
fully prepared. Now i will send this request and for this request server will return a  JSON data as a "Response".Now with this a "Response"
i can do something.To do something with this response i have to use a method of 'xhr' named xhr.onload. we can use another system to
do the same thing . To do this, think how we use addeventlistener in "xhr" in the same way  by using addeventlistener method by writing
xhr.addeventlistener and inplace of click parameter we have to use load and a callback function but this method is not supported by 
all browsers.so, first one is the best practice.Now the browser will call the .onload function when the browser will get the response.
 Now put this response in a variable named result. But how we will get or receive the response? we may theink that the response will be 
 received as a parameter of the function but unfortunately this will not be happen rather we will get the response in another object 
 of "xhr* named " response. Inside this response object we will get the response of the server. now put this xml.response
 inside a variable named result and console.log(result)and will get the output as json data like: 
 {
     "userId": 1,
     "id" : 1,
     "title" : "delectus aut autem",
     "completed" : false
 }  but this JSON data is not usable to do any task because it is not a pure object of javascript.
  So we need to convert it into real javascript object or data we need to use a method of javascript
  named JSON.parse(result). Now it has been convrted into a usable data.Now we will get a real object with proto in it. 
  Now we can do it in another way like before sending the response when i will take the preration if add a method named xml.responseType="JSON
  then i need not to use JSON.parse.Then it will give me directly javascript object or data.Now we will work with send data.send data will
  just post in the get. As send data is a different function so i need to do duplicate the send part inside the get part.But if i refactor 
  this functions common parts. to do this if i write a send function for sending data then it will be easier for me.Because send data is
  common both in get data function and send data function. Now i want to call this send request function inside 
  getData and sendData.But when sendData will send request then it will take first 
  parameter as post and second parameter sendRequest as callback funtion.So, to make it dynamic or generalized i hataken first parameter
  as 'method' because there are 6 methods of request.now as second parameter we need to take the  url. whether i want to get data or send
  data we need an address to hit.but send function will not get any response to use so i will use promise return to make it generalize. Now 
  i have declared a promise and return promise.So, for which function the condition will be true and resolve the function and return the promise
  this function will use this resolved data in the function.for example if a promise is resolve for getData function this will be reject for 
  sendData function and vice varsa.To do this i just resolve(xhr.response) so that i can call it as .then in any  function. Now if call the 
  sendRequest funtion then it will send request to the url and finally by using .then i will receive the xhr.response and hole it
  in responseData and do consoe.log(responseData) and output will be the same. now for sendData function we need to send some data so 
  as parameter we have to give some JSON.stringify data because server can receive only flat json data but here this object is javascript
  object and pass a parameter into the sendRequest(data) function as well as send(data) function. now we need to add a request header 
  where i will definitely tell the data type whether it is json or xml or html etc.Now for error handling we need to take help  of catch
  there can be two types of error one is network error another is application error. To catch this error use .catch in the sendRequest()
  function's promise and use xhr.error function in the sendRequest().But with this i can only catch only network releted error not application
  related error. to catch all types of error we need to catch the status of every response.To do this we will check the status code as 200 
  tthat implies that the request is successful200-400 implies successfuf 400-502 is error*/




const getButton = document.getElementById("get-button");
const sendButton = document.getElementById("send-button");

const sendRequest = function(method, url,data){
    const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("method", "url");
    xhr.responseType = "json";
    xhr.setRequestHeader("content-Type" , "application/json");
    xhr.send(data);

    xhr.onload = function(){
        if (xhr.status>=400){
            reject(xhr.response);
        }else {
            resolve(xhr.response);
        }
        // console.log(xhr.status);
        resolve(xhr.response);
        // const result = xhr.response
        // console.log(result);
        // console.log(JSON.parse (result));
    };
    xhr.onerror = function(){
        reject("something is wrong");
    }

    });
    return promise;
};

    /* const xhr = new XMLHttpRequest();
    // xhr.open("method", "url");
    // // xhr.responseType = "json";
    // xhr.send();
    // xhr.onload = function(){
    //     const result = xhr.response
    //     // console.log(result);
    //     console.log(JSON.parse (result));*/

const getData = function(){
    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
    .then((responseData)=> {
        console.log(responseData);
    })
}
const sendData = function(){
    sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }) )
    .then((responseData)=> {
        console.log(responseData);
    }).catch((err =>{
        console.log(error);
    }))
}
getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);

// Refactoring this code
    /*const xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    // // xhr.responseType = "json";
    // xhr.send();
    // xhr.onload = function(){
    //     const result = xhr.response
    //     // console.log(result);
    //     console.log(JSON.parse (result));*/

    


