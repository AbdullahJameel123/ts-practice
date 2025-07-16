//  Q1: Declare and initialize the following variables with appropriate types
var myName = "Ali";
var myAge = 22;
var isStudent = true;
// 🔹 Q3: Create an array of favorite colors (strings) and print each color using a loop
function greetUser(name) {
    return "Hi, " + name;
}
// 🔹 Q3: Create an array of favorite colors (strings) and print each color using a loop
var colors = ["Red", "Blue", "Green"];
colors.forEach(function (element) {
    console.log(element);
});
// 🔹 Q4: Factorial Function
function calcFact(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
// 🔹 Q5: Even Odd Checke Function
function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(7));
//  🔹 Q6: Sum of Array Elements
function sumArray(n) {
    var total = 0;
    n.forEach(function (element) {
        return total = total + element;
    });
}
console.log(sumArray([1, 2, 3, 4, 5]));
