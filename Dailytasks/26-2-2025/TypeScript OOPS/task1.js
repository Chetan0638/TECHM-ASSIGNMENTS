var Bus = /** @class */ (function () {
    function Bus(make, model, year) {
        this.built = make;
        this.model = model;
        this.year = year;
    }
    return Bus;
}());
var myBus = new Bus("BMW", "M4", 2023);
console.log("Make:", myBus.built);
console.log("Model:", myBus.model);
console.log("Year:", myBus.year);
