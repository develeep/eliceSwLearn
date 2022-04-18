class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  changeCar(carName){
    return this.name = carName; 
  }
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

document.write(myCar1.name);
document.write(myCar1.year);
console.log(myCar2.name);
myCar2.changeCar('BMW')
console.log(myCar2.name)