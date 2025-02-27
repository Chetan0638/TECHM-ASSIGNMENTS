class Motor {
    horsepower: number;
    fuelType: string;
  
    constructor(horsepower: number, fuelType: string) {
      this.horsepower = horsepower;
      this.fuelType = fuelType;
    }
  }
  
  class Automobile {
    make: string;
    model: string;
    year: number;
    motor: Motor;
  
    constructor(make: string, model: string, year: number, motor: Motor) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.motor = motor;
    }
  
    start() {
      console.log(`The ${this.make} ${this.model} (Year: ${this.year}) is starting.`);
    }
  
    printDetails() {
      console.log(`Automobile Details:`);
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Motor Details:`);
      console.log(`Horsepower: ${this.motor.horsepower}`);
      console.log(`Fuel Type: ${this.motor.fuelType}`);
    }
  }
  
  const myMotor = new Motor(500, "Diesel");
  const myAutomobile = new Automobile("Mercedes-Benz", "S-Class", 2025, myMotor);
  myAutomobile.start();
  myAutomobile.printDetails();
  
  