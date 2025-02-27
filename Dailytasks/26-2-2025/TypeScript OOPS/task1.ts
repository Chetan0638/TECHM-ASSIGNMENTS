class Bus {
    built: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.built= make;
      this.model = model;
      this.year = year;
    }
  }
  const myBus = new Bus("BMW", "M4", 2023);
  console.log("Make:", myBus.built);     
  console.log("Model:", myBus.model);   
  console.log("Year:", myBus.year);     
  