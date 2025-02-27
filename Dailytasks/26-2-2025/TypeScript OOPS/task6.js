var Pupil = /** @class */ (function () {
    function Pupil(fullName, rollNumber) {
        this.fullName = fullName;
        this.rollNumber = rollNumber;
    }
    return Pupil;
}());
var pupilWithRollNumber = new Pupil("chetan", 27);
var pupilWithoutRollNumber = new Pupil("nitish");
console.log("Pupil with Roll Number:");
console.log("Full Name:", pupilWithRollNumber.fullName);
console.log("Roll Number:", pupilWithRollNumber.rollNumber);
console.log("\nPupil without Roll Number:");
console.log("Full Name:", pupilWithoutRollNumber.fullName);
console.log("Roll Number:", pupilWithoutRollNumber.rollNumber);
