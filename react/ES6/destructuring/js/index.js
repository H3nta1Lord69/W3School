const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const carr = vehicles[0];
const truckk = vehicles[1];
const suvv = vehicles[2];

const [car, truck, suv] = vehicles;

const [car,, suv] = vehicles;



function calculate(a, b) 
{
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);



const vehicleOne = 
{
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
}
    
myVehicles(vehicleOne);

// old way
function myVehicles(vehicle) 
{
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}
  

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) 
{
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}


const vehicleTwo = 
{
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: 
    {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}

myVehicle(vehicleTwo)

function myVehicle({ model, registration: { state } }) 
{
    const message = 'My ' + model + ' is registered in ' + state + '.';
}