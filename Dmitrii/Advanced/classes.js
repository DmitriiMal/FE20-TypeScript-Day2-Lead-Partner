"use strict";
// /////////////////////////////// //
// /////////// Classes /////////// //
// /////////////////////////////// //
let vehiclesArr = [];
let passengerCarArr = [];
let truckArr = [];
let motorbikeArr = [];
let busArr = [];
// /////////// Vehicle /////////// //
class Vehicle {
    constructor(mark, model, color, mileage, seatsNumber, fuelType, year, condition, consumption, price, wheels, img) {
        this.mark = mark;
        this.model = model;
        this.color = color;
        this.mileage = mileage;
        this.seatsNumber = seatsNumber;
        this.fuelType = fuelType;
        this.year = year;
        this.condition = condition;
        this.consumption = consumption;
        this.price = price;
        this.wheels = wheels;
        this.img = img;
        vehiclesArr.push(this);
    }
    shortDescription() {
        return `
    <ul>
    <li>Condition: ${this.condition}</li>
    <li>Color: ${this.color}</li>
    <li>Mileage: ${this.mileage} km</li>
    <li>Year of production: ${this.year}</li>
    </ul>
    `;
    }
    description() {
        return `
    <ul>
    <li>number of seats: ${this.seatsNumber}</li>
    <li>Fuel type: ${this.fuelType}</li>
    <li>Fuel consumption: ${this.consumption} liter/km</li>
    </ul>
    `;
        // <li>Condition: ${this.condition}</li>
        // <li>Color: ${this.color}</li>
        // <li>Mileage: ${this.mileage}</li>
        // <li>Year of production: ${this.year}</li>
    }
}
// /////////// Passenger car /////////// //
class PassengerCar extends Vehicle {
    constructor(mark, model, color, mileage, seatsNumber, fuelType, year, condition, consumption, price, wheels, img, doors, drive) {
        super(mark, model, color, mileage, seatsNumber, fuelType, year, condition, consumption, price, wheels, img);
        this.doors = doors;
        this.drive = drive;
        passengerCarArr.push(this);
    }
}
// /////////// Truck /////////// //
class Truck extends Vehicle {
    constructor(mark, model, color, mileage, seatsNumber, fuelType, year, condition, consumption, price, wheels, img, type, capacity, winches) {
        super(mark, model, color, mileage, seatsNumber, fuelType, year, condition, consumption, price, wheels, img);
        this.type = type;
        this.capacity = capacity;
        this.winches = winches;
        truckArr.push(this);
    }
    description() {
        return `
    <ul>
    <li>Type: ${this.type}</li>
    <li>Capacity: ${this.capacity}</li>
    <li>Year of production: ${this.year}</li>
    <li>Fuel type: ${this.fuelType}</li>
    <li>Winches: ${this.winches}</li>
    </ul>
    `;
        // <li>Condition: ${this.condition}</li>
        // <li>Mileage: ${this.mileage}</li>
    }
}
// /////////// Motorbike /////////// //
class Motorbike extends Vehicle {
    constructor(mark, model, color, mileage, seatsNumber, fuelType, year, condition, consumption, price, wheels, img, drive, motor) {
        super(mark, model, color, mileage, seatsNumber, fuelType, year, condition, consumption, price, wheels, img);
        this.drive = drive;
        this.motor = motor;
        motorbikeArr.push(this);
    }
    description() {
        return `
    <ul>
    <li>Fuel type: ${this.fuelType}</li>
    <li>Тumber of wheels: ${this.wheels}</li>
    <li>Drive: ${this.drive}</li>
    <li>Motor: ${this.motor}</li>
    </ul>
    `;
        // <li>Condition: ${this.condition}</li>
        // <li>Mileage: ${this.mileage}</li>
        // <li>Year of production: ${this.year}</li>
    }
}
// /////////// Bus /////////// //
class Bus extends Vehicle {
    constructor(mark, model, color, mileage, seatsNumber, fuelType, year, condition, consumption, price, wheels, img, luggageRack, readingLights) {
        super(mark, model, color, mileage, seatsNumber, fuelType, year, condition, consumption, price, wheels, img);
        this.luggageRack = luggageRack;
        this.readingLights = readingLights;
        busArr.push(this);
    }
    description() {
        return `
    <ul>
    <li>number of seats: ${this.seatsNumber}</li>
    <li>Luggage rack: ${this.luggageRack}</li>
    <li>Reading lights: ${this.readingLights}</li>
    </ul>
    `;
        // <li>Condition: ${this.condition}</li>
        // <li>Color: ${this.color}</li>
        // <li>Mileage: ${this.mileage}</li>
        // <li>Year of production: ${this.year}</li>
    }
}
