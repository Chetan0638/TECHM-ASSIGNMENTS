class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Employee extends Person {
    employeeId: string;
  
    constructor(name: string, age: number, employeeId: string) {
      super(name, age);
      this.employeeId = employeeId;
    }
  }
  
  const myEmployee = new Employee("Liam Chen", 41, "EMP-0042");
  console.log("Name:", myEmployee.name);
  console.log("Age:", myEmployee.age);
  console.log("Employee ID:", myEmployee.employeeId);
  
  