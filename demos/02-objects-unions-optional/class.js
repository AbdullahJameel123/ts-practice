var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        console.log("Hi, my name is " + this.name);
    };
    return Person;
}());
var p = new Person("Fatima");
p.sayHello();
