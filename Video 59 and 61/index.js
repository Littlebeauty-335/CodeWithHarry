/* Excersice 9

Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

*/

// let X = (Math.trunc((Math.random())*100))+1;
// console.log(X);

// function operation(a,b) {
//     if (X<11) {
//          console.log("The sum is: " + (a-b));
//          console.log("The diff is: "+ (a/b));
//          console.log("The multiplication is: "+ (a+b));
//          console.log("The division is: "+ (a**b));
//     } else {
//         console.log("The sum is: " + (a+b));
//         console.log("The diff is: "+ (a-b));
//         console.log("The multiplication is: "+ (a*b));
//         console.log("The division is: "+ (a/b));      
//     } 
// }

// operation(3,5);

let X = (Math.trunc((Math.random())*100))+1;
console.log(X);
let a = prompt("Enter 1st number: ");
let b = prompt("Enter 2nd number: ");
let c = prompt("Enter the operator: ");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if(X > 10){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}


