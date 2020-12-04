/* ******1.variable nsming********
variable naming is very important to understand the project
Though the name becomes s little bit long still we need to give
a meaningful and self-expaanatory.so, that we can easily 
understand by the name about it's operation.
*** Avoid extra word in variable naming.***
EX: bad practice:
let namevalue
let theproduct
**Good practice
let name, let product,
***Write code in such a way that another programmer can 
understand your code without any problem***
Ex: bad practice
const products = ["T-shirt", "Shoes", "watches","Bags"];
products.forEach((p)=> {
    doSomethingElse();
    // what does p stands for?
    doSomethingElse(p);
});
***Good practice****
const products = ["T-shirt", "Shoes", "watches","Bags"];
products.forEach((product)=> {
    doSomethingElse();
    // use product instead of p for better understanding
    doSomethingElse(product);
});
Always try to write code in a way that it should be easily readable
for me as well as any other programer.
****No need to add unnecessary context*****
Ex: Bad practice
const product = {
    product Id: 1,
    productName:"T-shirt",
    productPrice:8.99,
    productUnits: 12,
};
******Good practice******
const product = {
   id: 1,
    Name:"T-shirt",
    Price:8.99,
    Units: 12,
};
*****Function naming********
01. Try to give a long and descriptive name for a function.
Bad practice:
function email(user){
    implementation;
}
Good practice:
function sendEmailToUser(email){
    implementation;
}
***Try to avoid too many arguments*****
Bad practice:
function getProducts(fields,fromDate, toDate){
    implementation.
}
Good practice:
function getProducts({fields,fromDate, toDate)}{
    implementation.
}
Here in first case i have send three arguments.But if
i send all this arguments as one objeect like in second
case then it will be counted as one argument which
is good practice then first case.
In test case this tricks will give benefit.
*****Try to use default arguments not conditionals.
Bad practice:
function createShape(tape){
    const shapeType = typw || "cricket" ;
}
Bad practice: 
function createShape(tape){
    const shapeType = typw || "circle" ;
}
Good practice:
function createShape(type = "circle"){
    .........;
}
In first case const shapeType = typw || "circle" and
is a conditional argument but the same thing we can do 
by using default argument like  type = "circle"
****Avoid to send flag type things as argument****
Ex: Bad
function createFile(name,isPublic){
    if (isPublic){
        fs.create(`./public/${name}`);
    } else{
        fs.create(name);
    }
}
Good:
unction createFile(name){
    
        fs.create(name);
    }
function createFile(isPublic){
    
        create(`./public/${name}`);
    }
In good practice we can saperate this two function.
***Try to avoid multiple tasks in one function rather 
write single function for every individual task*****
Bad:
function notifyUsers(users){
    users.forEach((user)=>{
        const userRecord = database.lookup(user);
        if (userRecord.isVerified()){
            notify(user);
        }
    })
}
// In this case two function is performing one is notifying
and another is veryfying. Now for simplidituy we can refactor
this function into two individual single function.
Good:
function notifyVerifiedUsers(users){
    users.filter((isUserVerified).forEach(notify);
}
function isUserVerified(user){
    const userRecord = database.lookup(users);
    return userRecord.isVerified()
}
****Refactiring function is one of the best practice in 
any functional programming***********


