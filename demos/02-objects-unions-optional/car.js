var Car = /** @class */ (function () {
    function Car(br, mo, yr) {
        this.brand = br;
        this.model = mo;
        this.year = yr;
    }
    Car.prototype.displayDetails = function () {
        console.log("This car is a ".concat(this.brand, " ").concat(this.model, " ").concat(this.year, ".")); // Log the car details
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2025);
myCar.displayDetails();
var car2 = new Car("Renault", "Triber", 2024);
myCar.displayDetails();
