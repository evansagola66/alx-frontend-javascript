// main.ts

// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  workFromHome: function (): string {
    throw new Error("Function not implemented.");
  },
  getCoffeeBreak: function (): string {
    throw new Error("Function not implemented.");
  },
  workTeacherTasks: function (): string {
    throw new Error("Function not implemented.");
  }
};

console.log(director1);


// main.ts

// Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // J. Doe






// main.ts

// Interface for the constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// The class implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student: StudentClassInterface = new StudentClass("John", "Doe");
console.log(student.displayName());   // John
console.log(student.workOnHomework()); // Currently working
