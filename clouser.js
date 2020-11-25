function bankAccount (initialbalance) {
    var balance = initialbalance;
    return function (){
        return balance;
    }

}
var account = bankAccount(100000);
console.log(account());
