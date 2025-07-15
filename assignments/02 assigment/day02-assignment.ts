// 🔹 Q1: Define an object type for Book

type Book = {
    title: string
    author: string
    publishedYear: number
    summary?: string
}

let book1: Book = {
    title: "Sahih Muslim",
    author: "Imam Muslim ibn al-Hajjaj al-Naysaburi",
    publishedYear: 250,
} 

let book2: Book = {
    title: "Sahih al-Bukhari",
    author: "Imam Muhammad al-Bukhari",
    publishedYear: 256,
    summary: "Sahih al-Bukhari is a collection of hadith compiled by Imam Muhammad al-Bukhari (d. 256 AH/870 CE) (rahimahullah). His collection is recognized by the overwhelming majority of the Muslim world to be the most authentic collection of reports of the Sunnah of the Prophet Muhammad (ﷺ). It contains over 7500 hadith" 
}



// console.log(book1, book2);


// 🔹 Q2: Create a function printBookDetails(book: Book)
function printBookDetails(book: Book): void {
  console.log(`Title: ${book.title} by ${book.author}`);
  console.log(`Published Year: ${book.publishedYear}`);

  if (book.summary) {
    console.log(`Summary: ${book.summary}`);
  }
}

printBookDetails(book2)


// 🔹 Q3: Use Union Types for userId
let userId: string | number;

function displayUserId(id: number | string) {
    console.log(id);
}

displayUserId(101)
displayUserId("EMP102")

// 🔹 Q4: Create a class Car

class Car {
    brand: string
    model: string
    year: number

    constructor(br:string, mo:string, yr: number) {
        this.brand = br
        this.model = mo
        this.year = yr
    }

    getInfo(): void {
        console.log(`Car: ${this.brand} ${this.model} (${this.year})`);   
    }
}

let car1 = new Car("Tata", "Harrier EV", 2025)

car1.getInfo()

// 🔹 Q5 (Bonus): Create a class Employee
class Employee{
    name: string
    role: string
    phone?: string

    constructor(n:string, ro:string, ph?:string){
        this.name = n
        this.role = ro
        this.phone = ph
    }

    contactInfo(employee: Employee): void {
        console.log(this.name);
        if(employee.phone) {
            console.log(this.phone);
            
        }
        
    }
}
