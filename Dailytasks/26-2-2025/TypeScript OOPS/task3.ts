class Car {
    built: string;
    model: string;
    year: number;
  
    
    constructor(built: string, model: string, year: number) {
      this.built = built;
      this.model = model;
      this.year = year;
    }
  
    
    start() {
      console.log(`The ${this.built} ${this.model} (Year: ${this.year}) is starting.`);
    }
  }
  

  class SUV extends Car {
    
    offRoadCapable: boolean;

    constructor(built: string, model: string, year: number, offRoadCapable: boolean) {
      super(built, model, year);
      this.offRoadCapable = offRoadCapable;
    }
    toggleOffRoadMode() {
      if (this.offRoadCapable) {
        console.log(`The ${this.built} ${this.model} is now in off-road mode.`);
      } else {
        console.log(`The ${this.built} ${this.model} is not suitable for off-road driving.`);
      }
    }
  }
  const mySUV = new SUV("Toyota", "Fortuner", 2023, true);
  mySUV.start();
  mySUV.toggleOffRoadMode();
  