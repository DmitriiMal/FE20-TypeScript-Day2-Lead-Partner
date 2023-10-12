// /////////////////////////////// //
// /////////// Classes /////////// //
// /////////////////////////////// //

let vehiclesArr: Vehicle[] = [];
let passengerCarArr: PassengerCar[] = [];
let truckArr: Truck[] = [];
let motorbikeArr: Motorbike[] = [];
let busArr: Bus[] = [];

// /////////// Vehicle /////////// //

class Vehicle {
  mark: string;
  model: string;
  color: string;
  mileage: number;
  seatsNumber?: number;
  fuelType: string;
  year: number;
  condition: string;
  consumption: number;
  price: number;
  wheels?: number;
  img: string;

  constructor(mark: string, model: string, color: string, mileage: number, seatsNumber: number, fuelType: string, year: number, condition: string, consumption: number, price: number, wheels: number, img: string) {
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
  doors: number;
  drive: string;
  constructor(mark: string, model: string, color: string, mileage: number, seatsNumber: number, fuelType: string, year: number, condition: string, consumption: number, price: number, wheels: number, img: string, doors: number, drive: string) {
    super(mark, model, color, mileage, seatsNumber, fuelType, year, condition, consumption, price, wheels, img);
    this.doors = doors;
    this.drive = drive;

    passengerCarArr.push(this);
  }
}

// /////////// Truck /////////// //

class Truck extends Vehicle {
  type: string;
  capacity: number;
  winches: number;
  constructor(mark: string, model: string, color: string, mileage: number, seatsNumber: number, fuelType: string, year: number, condition: string, consumption: number, price: number, wheels: number, img: string, type: string, capacity: number, winches: number) {
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
  // wheels: number;
  drive: string;
  motor: string;
  constructor(mark: string, model: string, color: string, mileage: number, seatsNumber: number, fuelType: string, year: number, condition: string, consumption: number, price: number, wheels: number, img: string, drive: string, motor: string) {
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
  luggageRack: string;
  readingLights: string;
  constructor(mark: string, model: string, color: string, mileage: number, seatsNumber: number, fuelType: string, year: number, condition: string, consumption: number, price: number, wheels: number, img: string, luggageRack: string, readingLights: string) {
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
