function cookingMasterclass(arr) {
    let budget = arr.shift();
    let students = arr.shift();
    let flourPackPrice = arr.shift()
    let flourPrice = (flourPackPrice * students) - (Math.floor(students/5) * flourPackPrice);
    let eggsPrice = arr.shift() * 10 * students;
    let apronPrice = arr.shift() * Math.ceil(students * 1.2);
    let totalCost = flourPrice + eggsPrice + apronPrice;

    if (totalCost <= budget){
        console.log(`Items purchased for ${totalCost.toFixed(2)}$.`);
    } else {
        console.log(`${(totalCost - budget).toFixed(2)}$ more needed.`);
    }

}
cookingMasterclass([100,
    25,
    4.0,
    1.0,
    6.0])