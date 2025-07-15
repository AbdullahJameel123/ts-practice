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

//  🔹 Q6: Sum of Array Elements