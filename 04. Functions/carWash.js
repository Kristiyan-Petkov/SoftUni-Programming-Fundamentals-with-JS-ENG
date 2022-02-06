function carWash(array) {
    let cleanliness = 0;
    for (let action of array) {
        switch (action) {
            case "soap":
                cleanliness += 10;
                break;
            case "water":
                cleanliness *= 1.2;
                break;
            case "vacuum cleaner":
                cleanliness *= 1.25;
                break;
            case "mud":
                cleanliness *= 0.9;
                break;
        }
    }
    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])