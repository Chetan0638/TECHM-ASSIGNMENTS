class Student {
    fullName: string;
    studentAge: number;
  
    constructor(fullName: string, studentAge: number) {
      this.fullName = fullName;
      if (studentAge > 0) {
        this.studentAge = studentAge;
      } else {
        this.studentAge = 0;
      }
    }
  }
  
  const student1 = new Student("Kaitlyn Jennings", 25);
  const student2 = new Student("Cory Langley", -3);
  
  console.log("Student 1 - Full Name:", student1.fullName, "Student Age:", student1.studentAge);
  console.log("Student 2 - Full Name:", student2.fullName, "Student Age:", student2.studentAge);
  