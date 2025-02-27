class Vehicle {
    brand: string;
    variant: string;
  
    constructor(brand: string, variant: string) {
      this.brand = brand;
      this.variant = variant;
    }
  }
  
  class Car extends Vehicle {
    fuelType: string;
  
    constructor(brand: string, variant: string, fuelType: string) {
      super(brand, variant);
      this.fuelType = fuelType;
    }
  }
  
  const myCar = new Car("Tata", "Nexon", "Diesel");
  
  console.log("Brand:", myCar.brand);
  console.log("Variant:", myCar.variant);
  console.log("Fuel Type:", myCar.fuelType);
  