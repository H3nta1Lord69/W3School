const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

document.write(numbersCombined);

const morenumbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = morenumbers;

document.write("<p>" + one + "</p>");
document.write("<p>" + two + "</p>");
document.write("<p>" + rest + "</p>");

const myVehicle = 
{
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
    }
    
const updateMyVehicle = 
{
    type: 'car',
    year: 2021, 
    color: 'yellow'
}
    
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
//Check the result object in the console:
console.log(myUpdatedVehicle);