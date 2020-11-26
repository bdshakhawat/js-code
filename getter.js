class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
    get setName(){
        // return this.name;
        return "sumon";
    }
}
let sakib = new person ("sakib", 40);
console.log(sakib.setName);