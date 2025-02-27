class Pupil {
    fullName: string;
    rollNumber: number | undefined;
  
    constructor(fullName: string, rollNumber?: number) {
      this.fullName = fullName;
      this.rollNumber = rollNumber;
    }
  }
  
  const pupilWithRollNumber = new Pupil("chetan", 27);
  const pupilWithoutRollNumber = new Pupil("nitish");
  console.log("Pupil with Roll Number:");
  console.log("Full Name:", pupilWithRollNumber.fullName);
  console.log("Roll Number:", pupilWithRollNumber.rollNumber);
  console.log("\nPupil without Roll Number:");
  console.log("Full Name:", pupilWithoutRollNumber.fullName);
  console.log("Roll Number:", pupilWithoutRollNumber.rollNumber);
  