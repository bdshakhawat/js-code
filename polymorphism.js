class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    play(){
        console.log(`${this.name} is playing`);
    }
}
class cricketer extends person{
    constructor(name,age,type,country){
        super(name,age);
        this.name = name;
        this.age =age;
        this.type =type;
        this.country = country;
    }
    play(){
        super.play();
               
        console.log(`${this.name} is playing cricket`);
    }
}
let sakib = new cricketer ("sakib", 45,"All rounder", "Bangladesh");

sakib.play();