// function modifier(strings, ...values) {
//     const m = string.reduce((prev, current) => {
//         return prev + current + (values.length ? "Mr. " + values.shift(): ""); 


//     } , " ");
//     return m;

//     // console.log(strings);
//     // console.log(values);
//     // output: [ '', ' and ', ' are our national cricketer' ]  and  [ 'sakib', 'Tamim' ]

// }
function modifier(strings, ...values) {
    const m = strings.reduce((prev, current) => {
        return prev + current + (values.length ? "Mr. " + values.shift() : "");
    }, "");
    return m;

}
var player1 = "sakib";
var player2 = "Tamim";

console.log( modifier  `we have ${player1} and ${player2} in our national Team`);
// output:we have Mr. sakib and Mr. Tamim in our national Team 
// output: sakib and Tamim are our national cricketer.Now if i want to add Mr. before each player1 and player2. Herw all 
// strings will go as paramente string like here and, are our national cricketer  and  all variables will go with ...rest
// parameter.
