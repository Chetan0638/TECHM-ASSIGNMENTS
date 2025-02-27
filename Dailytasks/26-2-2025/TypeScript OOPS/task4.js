var Motor = /** @class */ (function () {
    function Motor(horsepower, fuelType) {
        this.horsepower = horsepower;
        this.fuelType = fuelType;
    }
    return Motor;
}());
var Automobile = /** @class */ (function () {
    function Automobile(make, model, year, motor) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.motor = motor;
    }
    Automobile.prototype.start = function () {
        console.log("The ".concat(this.make, " ").concat(this.model, " (Year: ").concat(this.year, ") is starting."));
    };
    Automobile.prototype.printDetails = function () {
        console.log("Automobile Details:");
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.year));
        console.log("Motor Details:");
        console.log("Horsepower: ".concat(this.motor.horsepower));
        console.log("Fuel Type: ".concat(this.motor.fuelType));
    };
    return Automobile;
}());
var myMotor = new Motor(500, "Diesel");
var myAutomobile = new Automobile("Mercedes-Benz", "S-Class", 2025, myMotor);
myAutomobile.start();
myAutomobile.printDetails();
