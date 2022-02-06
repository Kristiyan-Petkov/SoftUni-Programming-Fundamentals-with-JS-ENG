function fuelMoney(distance, passengers, price){
    let fuelConsumption = 7 + (passengers * 0.1);
    let neededMoney = (distance / 100) * (price * fuelConsumption);
    console.log(`Needed money for that trip is ${neededMoney.toFixed(2)} lv`);
}
fuelMoney(260, 9, 2.49)