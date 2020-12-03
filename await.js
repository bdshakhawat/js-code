/* A simple function returning hello and out put will be only "Hello"
function friendyFunction (){
    return "Hello";
}
console.log(friendyFunction());
 output: Hello.*/
 /* Using async  we will get a promise return
async function friendyFunction (){
    return "Hello";
}
console.log(friendyFunction());
output: Promise { 'Hello' } */


/*function friendlyFunction() {
    return Promise.resolve("hello");
}
console.log(friendlyFunction());
Promise { 'hello' } */
// converting the promise into async await function to avoid using .then complexcity. In earlier case we have two promises addTocalandar and 
//  meting then make a chain of promise to add them together.Here meting promise is returning a metingDetails 
const hasMeting = true;
// const hasMeting = false;
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


const addToCalander = (metingDetails)=>{
    
        const calendar = `${metingDetails.name} has been sceduled on ${metingDetails.location} at ${metingDetails.time}`;
       return Promise.resolve(calendar);

};

// meting

    
//     .then(addToCalander)
//     .then((res)=>{
//         console.log(JSON.stringify(res));
//     })
//     .catch((err)=>{
//         console.log(err.message); 

//     }) 
// async function myMeeting() {
//      const metingDetails = await meting;
//     const calandar = await addToCalander(metingDetails);
//     console.log(calandar);
    
       
// }
// myMeeting();

// now to handle reject function or catch we need to use try and catch function 
    async function myMeeting() {
        try{
        const metingDetails = await meting;
        const calandar = await addToCalander(metingDetails);
        console.log(calandar);
        }catch{
            console.log(`Something wrong happen`);
        }
        
    }
    myMeeting();
    // output: Technical meting has been sceduled on google meet at 10:00 pm
    
