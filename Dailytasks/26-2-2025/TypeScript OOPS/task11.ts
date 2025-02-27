class Shape {
    color: string;
  
    constructor(color: string) {
      this.color = color;
    }
  
    draw() {
      console.log(`Drawing a ${this.color} shape.`);
    }
  }
  
  class Circle extends Shape {
    radius: number;
  
    constructor(color: string, radius: number) {
      super(color);
      this.radius = radius;
    }
  
    draw() {
      console.log(`Drawing a ${this.color} circle with radius ${this.radius}.`);
    }
  }
  
  const myCircle = new Circle("Red", 5);
  myCircle.draw();
  
      
  
