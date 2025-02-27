class Form {
    color: string;
  
    constructor(color: string) {
      this.color = color;
    }
  }
  
  class Circle extends Form {
    radius: number;
  
    constructor(color: string, radius: number) {
      super(color);
      this.radius = radius;
    }
  }
  
  const myCircle = new Circle("Purple", 11);
  console.log("Color:", myCircle.color);
  console.log("Radius:", myCircle.radius);