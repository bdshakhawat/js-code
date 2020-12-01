// To create a promise declare a variable of any name give equal sign write newPromise.Here ' P' must be capital and it 
// will receive two function and take two parameter as resolved and reject. It can be any name other than resolved and
// rejedted but it convention to use this two name.If the promise is fulfilled then it will call the resolved funcion
//  otherwise call the rejected function.
// The JSON.stringify() method converts a JavaScript object or value to a JSON string, 
// const hasMeting = false;

// const { reject } = require("async");

// const meting = new Promise((resolve,reject)=> {
//     if(!hasMeting){
//         const metingDetails = {
//             name : "Technical meting",
//             location : "google meet" ,
//             time : "10:00 pm"
//         }
//         resolve(metingDetails);
//     } else {
//         reject (new Error("Meting already sceduled"));
//     }

// }) 
// meting
//     .then((res)=>{
//         console.log(JSON.stringify(res));
//     })
//     .catch((err)=>{
//         console.log(err.massage); 

//     }) output: {"name":"Technical meting","location":"google meet","time":"10:00 pm"}
/*const hasMeting = false;

const meting = new Promise((resolve,reject)=> {
    if(!hasMeting){
        const metingDetails = {
            name : "Technical meting",
            location : "google meet" ,
            time : "10:00 pm"
        }
        resolve(metingDetails);
    } else {
        reject (new Error("Meting already sceduled"));
    }

}) 
// new promise using the result of another promise. Actually it is a function returning a promise so this is also a promise
// If there is no reject then we can simplyfy the code. Now this is a new promise that get result from the meting promise

const addToCalander = (metingDetails)=>{
    
        const calendar = `${metingDetails.name} has been sceduled on ${metingDetails.location} at ${metingDetails.time}`;
       return Promise.resolve(calendar);

};

meting
// To chain promise use another .then
    
    .then(addToCalander)
    .then((res)=>{
        console.log(JSON.stringify(res));
    })
    .catch((err)=>{
        console.log(err.message); 

    }) */
    // output: Technical meting has been sceduled on google meet at 10:00 pm"
   const promise1 =Promise.resolve(`promise 1 resolved`);
   const promise2 = new Promise((resolve, reject)=>{
       setTimeout(()=>{
           resolve(`promise 2 resolved`);
       },3000);
   });
//    promise1.then((res)=> console.log(res));
//    promise2.then((res)=> console.log(res));
//    Here promise1 is givign result first and after 3s promise2 is giving resust. But i want that two promise will start togetner and give 
//  one final result. For this we will use promise.all

   Promise.all([promise1 , promise2])
   .then(res =>{
    console.log(res);
});
// output: [ 'promise 1 resolved', 'promise 2 resolved' ]
// Promise.race work like promise.all but he print only the first promise. It starts two promises together but print the result of first promise
Promise.race([promise1 , promise2])
   .then(res =>{
    console.log(res);
});
// output: promise 1 resolved
   