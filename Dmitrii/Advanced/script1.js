"use strict";
// //////////////////////////////// //
// /////////// Advanced /////////// //
// //////////////////////////////// //
let result = document.querySelector('#result');
let myBtn = document.querySelectorAll('.my-btn');
// result.innerHTML = `
// ${vehiclesArr[0].shortDescription()}
// ${vehiclesArr[0].description()}
// `;
console.table(vehiclesArr);
// console.table(passengerCarArr);
// console.table(truckArr);
// console.table(motorbikeArr);
// console.table(busArr);
vehiclesArr.forEach((car) => {
    result.innerHTML += `
  <div class="my-3">
    <div class="card my-card">
    <img src="${car.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${car.mark} ${car.model}</h5>
      <p class="card-text">${car.shortDescription()}</p>
      <a href="#${car.model}" data-bs-toggle="collapse" class="btn btn-light my-btn">See more</a>
      <div class="collapse" id="${car.model}">
      <div class="mt-2">  
      ${car.description()}
      <h6>Price: ${car.price}</h6>
      </div>
      </div>
    </div>
    </div>
  </div>
  `;
});
