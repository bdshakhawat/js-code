class Person{
    constructor(name,age){
       this.name = name;
       this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);

    }
    get setName(){
        return this.name;
    }
    set setName(name){
        this.name = name;
    }

}
let sakib = new Person("sakib" , 40);
sakib.setName = "Tamim";
console.log(sakib.name);
