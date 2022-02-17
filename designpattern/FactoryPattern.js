/**
 * 공장과 같다.
 * 객체 생성을 나머지 코드와 분리.
 * 객체 생성코드만 따로 싼 다음 
 * 다른 객체들도 만들 수 있는 API만 노출시킨다.
 */

const Vehicle = function() {};

const Car = function() {
  this.say = function() {
    console.log('I am a car');
  }
};

const Truck = function() {
  this.say = function() {
    console.log('I am a truck');
  }
};

const Bike = function() {
  this.say = function() {
    console.log('I am a bike');
  }
};

const VehicleFactory = function() {
    //여기서 this는 VehicleFactory를 가리킴 
  this.createVehicle = (vehicleType) => {
    let vehicle;
    switch (vehicleType) {
      case 'car':
        vehicle = new Car();
        break;
      case 'truck':
        vehicle = new Truck();
        break;
      case 'bike':
        vehicle = new Bike();
        break;
      default:
        vehicle = new Vehicle();
    }
 
    return vehicle;
  }
};

const vehicleFactory = new VehicleFactory();
console.log(vehicleFactory);
let car = vehicleFactory.createVehicle('car');
let truck = vehicleFactory.createVehicle('truck');
let bike = vehicleFactory.createVehicle('bike');
console.log(car);
console.log(truck);
console.log(bike);
car.say(); // I am a car
truck.say(); // I am a truck
bike.say(); // I am a bike