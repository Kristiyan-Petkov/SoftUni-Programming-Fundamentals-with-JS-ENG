function needForSpeed(arr) {
    let carsNum = Number(arr.shift());
    let garage = {};
    for (let i = 0; i < carsNum; i++) {
        let carSpecs = arr.shift().split('|');
        garage[carSpecs[0]] = {
            mileage: Number(carSpecs[1]),
            fuel: Number(carSpecs[2]),
        }
    }
    while (arr[0] != 'Stop') {
        let tokens = arr.shift().split(' : ');
        let command = tokens[0];
        let car = tokens[1];
        switch (command) {
            case 'Drive':
                let fuelNeeded = Number (tokens[3]);
                let fuelInCar = garage[car].fuel;
                if (fuelInCar < fuelNeeded){
                    console.log('Not enough fuel to make that ride');
                } else {
                    let distance = Number (tokens[2]);
                    garage[car].mileage += distance;
                    garage[car].fuel -= fuelNeeded;
                    console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
                    if (garage[car].mileage >= 100000){
                        console.log(`Time to sell the ${car}!`);
                        delete garage[car];
                    }
                }
                break;
            case 'Refuel':
                let availableRefill = Number (tokens[2]);
                if (availableRefill + garage[car].fuel > 75){
                    let actualRefill = 75 - garage[car].fuel;
                    garage[car].fuel = 75;
                    console.log(`${car} refueled with ${actualRefill} liters`);
                } else {
                    garage[car].fuel += availableRefill;
                    console.log(`${car} refueled with ${availableRefill} liters`);
                }
                break;
            case 'Revert':
                let kilometers = Number (tokens[2]);
                garage[car].mileage -= kilometers;
                if (garage[car].mileage >= 10000){
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
                break;
        }
    }

    let carsFinal = Object.entries(garage);
    for (let [car, values] of carsFinal){
        console.log(`${car} -> Mileage: ${values.mileage} kms, Fuel in the tank: ${values.fuel} lt.`);
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])

console.log('------------------');

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])