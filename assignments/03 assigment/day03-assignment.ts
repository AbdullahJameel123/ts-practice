// 🔷 Q1. Create an Enum
enum PaymentStatus {
    Pending,
    Completed,
    Failed,
}

let currentStatus: PaymentStatus = PaymentStatus.Completed;

console.log(currentStatus);

// 🔷 Q2. Create a Tuple
let locations: [number, number] = [32234, 254567]
console.log(locations);

interface Book {
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

// 🔷 Q4. Function with Interface Parameter
function printBookDetails(book: Book) {
    console.log(`Book Name: ${book.title} by ${book.author} puplishedYear: ${book.publishedYear}.`);
    if (book.summary) {
        console.log(`Summary: ${book.summary}`);
        
    }
}

// 🔷 Q5. Intersection Types
type Customer = {
    name: string
    email: string
}

type billingDetails = {
    cardNumber: string
    expiryDate: string
}

type billingCustomer = Customer & billingDetails

const customer1: billingCustomer = {
    name: "Ali",
    email: "ali123@gmail.com",
    cardNumber: "012",
    expiryDate: "02-11-2029"

}

console.log(`Card Number: ${customer1.cardNumber}`);

