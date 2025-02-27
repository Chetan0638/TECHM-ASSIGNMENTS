class Student {
    fullName: string;
    className: string;
  
    constructor(fullName: string, className: string) {
      this.fullName = fullName;
      this.className = className;
    }
  }
  
  const mystd= new Student("Ethan Kim", "Class IX");
  console.log("Full Name:", mystd.fullName);
  console.log("Class Name:", mystd.className);
  
  
  