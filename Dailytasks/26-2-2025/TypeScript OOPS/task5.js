var Student = /** @class */ (function () {
    function Student(fullName, className) {
        this.fullName = fullName;
        this.className = className;
    }
    return Student;
}());
var mystd = new Student("Ethan Kim", "Class IX");
console.log("Full Name:", mystd.fullName);
console.log("Class Name:", mystd.className);
