var Bus = /** @class */ (function () {
    function Bus(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Bus.prototype.start = function () {
        console.log("The ".concat(this.make, " ").concat(this.model, " (Year: ").concat(this.year, ") is starting."));
    };
    return Bus;
}());
var myBus = new Bus("BMW", "M4", 2023);
myBus.start();
