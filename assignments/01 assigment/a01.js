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
console.log("Factorial of ".concat(5, " = ").concat(calcFact(5)));
