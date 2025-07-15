// 🔹 Q1: Define an object type for Book
var book1 = {
    title: "Sahih Muslim",
    author: "Imam Muslim ibn al-Hajjaj al-Naysaburi",
    publishedYear: 250,
};
var book2 = {
    title: "Sahih al-Bukhari",
    author: "Imam Muhammad al-Bukhari",
    publishedYear: 256,
    summary: "Sahih al-Bukhari is a collection of hadith compiled by Imam Muhammad al-Bukhari (d. 256 AH/870 CE) (rahimahullah). His collection is recognized by the overwhelming majority of the Muslim world to be the most authentic collection of reports of the Sunnah of the Prophet Muhammad (ﷺ). It contains over 7500 hadith"
};
// console.log(book1, book2);
// 🔹 Q2: Create a function printBookDetails(book: Book)
function printBookDetails(book) {
    console.log("Title: ".concat(book.title, " by ").concat(book.author));
    console.log("Published Year: ".concat(book.publishedYear));
    if (book.summary) {
        console.log("Summary: ".concat(book.summary));
    }
}
printBookDetails(book2);
// 🔹 Q3: Use Union Types for userId
var userId;
function displayUserId(id) {
    console.log(id);
}
displayUserId(101);
displayUserId("EMP102");
// 🔹 Q4: Create a class Car
var Car = /** @class */ (function () {
    function Car(br, mo, yr) {
        this.brand = br;
        this.model = mo;
        this.year = yr;
    }
    Car.prototype.getInfo = function () {
        console.log("Car: ".concat(this.brand, " ").concat(this.model, " (").concat(this.year, ")"));
    };
    return Car;
}());
var car1 = new Car("Tata", "Harrier EV", 2025);
car1.getInfo();
// 🔹 Q5 (Bonus): Create a class Employee
var Employee = /** @class */ (function () {
    function Employee(n, ro, ph) {
        this.name = n;
        this.role = ro;
        this.phone = ph;
    }
    Employee.prototype.contactInfo = function (employee) {
        console.log(this.name);
        if (employee.phone) {
            console.log(this.phone);
        }
    };
    return Employee;
}());
