let target = document.querySelector('#target') as HTMLElement;

// /////////////////////// //
// //////// Basic //////// //
// /////////////////////// //

// Ex 1

class Person {
  name: string;
  age: number;
  jobTitle: string;
  constructor(name: string, age: number, jobTitle: string) {
    this.name = name;
    this.age = age;
    this.jobTitle = jobTitle;
  }

  greeting() {
    return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
  }
}

// Ex 2

class Employee extends Person {
  salary: number;
  jobLocation: string;
  constructor(name: string, age: number, jobTitle: string, salary: number, jobLocation: string) {
    super(name, age, jobLocation);
    this.salary = salary;
    this.jobLocation = jobLocation;
  }
  printSalary() {
    return `and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
  }
}
