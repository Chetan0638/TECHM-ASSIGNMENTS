var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, variant) {
        this.brand = brand;
        this.variant = variant;
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, variant, fuelType) {
        var _this = _super.call(this, brand, variant) || this;
        _this.fuelType = fuelType;
        return _this;
    }
    return Car;
}(Vehicle));
var myCar = new Car("Tata", "Nexon", "Diesel");
console.log("Brand:", myCar.brand);
console.log("Variant:", myCar.variant);
console.log("Fuel Type:", myCar.fuelType);
