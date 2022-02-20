function taxCalculator(str) {
    let vehicles = str
        .shift()
        .split('>>');

    let totalTaxCollected = 0;

    for (let vehicle of vehicles) {
        let tax = 0;
        let [vehicleType, years, km] = vehicle.split(' ');
        switch (vehicleType) {
            case 'family':
                tax = (50 - (years * 5)) + (Math.floor(km / 3000) * 12);
                console.log(`A ${vehicleType} car will pay ${tax.toFixed(2)} euros in taxes.`);
                break;
            case 'heavyDuty':
                tax = (80 - (years * 8)) + (Math.floor(km / 9000) * 14);
                console.log(`A ${vehicleType} car will pay ${tax.toFixed(2)} euros in taxes.`);
                break;
            case 'sports':
                tax = (100 - (years * 9)) + (Math.floor(km / 2000) * 18);
                console.log(`A ${vehicleType} car will pay ${tax.toFixed(2)} euros in taxes.`);
                break;
            default:
                console.log('Invalid car type.');
                break;
        }
        totalTaxCollected += tax;
    }
    console.log(`The National Revenue Agency will collect ${totalTaxCollected.toFixed(2)} euros in taxes.`);
}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])