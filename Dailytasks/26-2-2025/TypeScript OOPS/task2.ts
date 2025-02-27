class Bus {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    start() {
      console.log(`The ${this.make} ${this.model} (Year: ${this.year}) is starting.`);
    }
  }
  const myBus = new Bus("BMW", "M4", 2023);
  myBus.start(); 
  