//  Q1: Declare and initialize the following variables with appropriate types
let myName: string = "Ali"
let myAge: number = 22 
let isStudent: boolean = true


// 🔹 Q3: Create an array of favorite colors (strings) and print each color using a loop
function greetUser(name: string): string {
    return "Hi, " + name
}



// 🔹 Q3: Create an array of favorite colors (strings) and print each color using a loop

let colors: string[] = ["Red", "Blue", "Green"];

colors.forEach(element => {
    console.log(element);
    
});

// 🔹 Q4: Factorial Function
function calcFact(n: number): number {
    let fact: number = 1;
    for(let i: number = 1; i <= n; i++) {
        fact = fact * i
    }
    return fact
}   


// 🔹 Q5: Even Odd Checke Function

function isEven(n:number): boolean {
    if (n % 2 == 0){
        return true
    }
    else {
        return false
    }
}

console.log(isEven(7));


//  🔹 Q6: Sum of Array Elements

function sumArray(n: number[]): number{
    let total: number = 0
    n.forEach(element => {
        total = total + element 
    });
    return total
}

console.log(sumArray([1, 2, 3, 4, 5]));
