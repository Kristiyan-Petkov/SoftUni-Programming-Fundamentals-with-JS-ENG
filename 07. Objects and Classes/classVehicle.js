function classVehicle(){
//     Vehicle that has the following properties:
// •	type – a string
// •	model – a string
// •	parts – an object that contains:
    // o	engine – number (quality of the engine)
    // o	power – number
    // o	quality – engine * power
// •	fuel – a number
// •	drive – a function that receives fuel loss and decreases the fuel of the vehicle by that number
    // let parts = { engine: 6, power: 100 };

    

    class Vehicle {
        constructor (type, model, parts, fuel){
            let quality = parts.engine * parts.power;
            this.type = type;
            this.model = model;
            this.parts = {
                quality
            },
            this.fuel = fuel;
            this.drive = function drive(n){
                this.fuel = fuel - n
            };
        }
    }

    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);

}
classVehicle()