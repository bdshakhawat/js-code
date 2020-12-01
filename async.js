// var processOrder = (customer) => {
//     console.log("processing order customer 1");
//     var currentTime = new Date().getTime();
//     while (currentTime + 3000 >= newDate().getTime());
//     console.log("Ooder processed for customer");
// }
// console.log("take order for customer 1");
// processOrder();
// console.log("completed order for customer 1");
// ************
// var processOrder = (customer) => {
//         console.log("processing order customer 1");
//         var currentTime = new Date().getTime();
//         setTimeout(()=> {
//             console.log("cooking is completed");
//         }, 3000);
//     }
//     console.log("take order for customer 1");
//     processOrder();
//     console.log("completed order for customer 1");
    /* output: take order for customer 1
processing order customer 1
completed order for customer 1
cooking is completed*/
// **************callback function**********
// first call takeorder() then takeover will call processeorder().After completion of processorder it will call completeorder.

const takeOrder = (customer,callback) => {
    console.log(`Take order from ${customer}`);
    callback(customer);
}
const processOrder = (customer,callback) => {
    console.log(`processing order for ${customer}`);
    setTimeout(() => {
        console.log("cooking completed");
        console.log(`processed order for ${customer}`);
        callback(customer);
    }, 3000);


}
const completeOrder = (customer) => {
    console.log(`complete order for ${customer}`);

}
takeOrder("customer 1", (customer)=>{
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
});
/* outpot: Take order from customer 1
processing order for customer 1
cooking completed
processed order for customer 1
complete order for customer 1 */

