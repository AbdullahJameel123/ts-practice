// 🔷 Q1. Create an Enum
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Pending"] = 0] = "Pending";
    PaymentStatus[PaymentStatus["Completed"] = 1] = "Completed";
    PaymentStatus[PaymentStatus["Failed"] = 2] = "Failed";
})(PaymentStatus || (PaymentStatus = {}));
var currentStatus = PaymentStatus.Completed;
console.log(currentStatus);
// 🔷 Q2. Create a Tuple
var locations = [32234, 254567];
console.log(locations);
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
// 🔷 Q4. Function with Interface Parameter
function printBookDetails(book) {
    console.log("Book Name: ".concat(book.title, " by ").concat(book.author, " puplishedYear: ").concat(book.publishedYear, "."));
    if (book.summary) {
        console.log("Summary: ".concat(book.summary));
    }
}
var customer1 = {
    name: "Ali",
    email: "ali123@gmail.com",
    cardNumber: "012",
    expiryDate: "02-11-2029"
};
console.log("Card Number: ".concat(customer1.cardNumber));
