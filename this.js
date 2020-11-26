var printPlayerNameFunction = function(obj){
    obj.printPlayerNameFunction = function(){
        console.log(this.name);
    }
}
var sakib = {
    name: "sakib",
    age: 35,
};
var tamin = {
    name: "tamim",
    age: 38,
};
printPlayerNameFunction(sakib);
printPlayerNameFunction(tamin);
sakib.printPlayerNameFunction();
tamin.printPlayerNameFunction();