"use strict";
let target = document.querySelector('#target');
// /////////////////////// //
// //////// Basic //////// //
// /////////////////////// //
// Ex 1
class Person {
    constructor(name, age, jobTitle) {
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
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobLocation);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printSalary() {
        return `and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
    }
}
