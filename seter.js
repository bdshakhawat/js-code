class Person{
    constructor(name,age){
       this.name = name;
       this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);

    }
    static isEqual(){
       return  this.name;
    }
// //    static isEqualAge(cricketer1,cricketer2){
// //        return cricketer1.age === cricketer2.age;
//    }
    

}
let sakib = new Person("sakib" , 40);
let tamim = new Person("Tamim",40);
console.log(Person.isEqual());
// console.log(Person.isEqualAge(sakib,tamim));
// output true or false

// console.log(sakib.name);
