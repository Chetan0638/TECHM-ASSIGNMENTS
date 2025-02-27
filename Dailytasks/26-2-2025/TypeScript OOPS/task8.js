var Student = /** @class */ (function () {
    function Student(fullName, studentAge) {
        this.fullName = fullName;
        if (studentAge > 0) {
            this.studentAge = studentAge;
        }
        else {
            this.studentAge = 0;
        }
    }
    return Student;
}());
var student1 = new Student("Kaitlyn Jennings", 25);
var student2 = new Student("Cory Langley", -3);
console.log("Student 1 - Full Name:", student1.fullName, "Student Age:", student1.studentAge);
console.log("Student 2 - Full Name:", student2.fullName, "Student Age:", student2.studentAge);
