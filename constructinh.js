class person{
    constructor(name,age){
        this.name =name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}
class cricketer extends person{
    constructor(name, age, type, country){
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    play(){
        console.log(`${this.name } is playing`);
    }
}
let sakib = new cricketer("sakib",40,"All Rounder", "Bangladesh");
console.log(sakib.play());
