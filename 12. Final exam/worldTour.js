function worldTour(input) {
    let stops = input.shift();
    while (input[0] !== 'Travel') {
        let line = input.shift().split(':');
        if (line[0] === 'Add Stop') {
            let valueIndex = stops[Number(line[1])];
            if (valueIndex != undefined) {
                let stopToAdd = line[2]
                let stopsAddition = stops.split('');
                stopsAddition.splice(Number(line[1]), 0, stopToAdd);
                stops = stopsAddition.join('');
            }
        } else if (line[0] === 'Remove Stop') {
            let indexStart = stops[Number(line[1])];
            let indexEnd = stops[Number(line[2])];
            let charsToRemove = (Number(line[2])) - (Number(line[1])) + 1;
            if (indexStart != undefined && indexEnd != undefined) {
                let stopRemoval = stops.split('');
                stopRemoval.splice(Number(line[1]), charsToRemove);
                stops = stopRemoval.join('');
            }
        } else {
            let target = line[1];
            let replacement = line[2];

            if (stops.includes(target)){
                stops = stops.replace(target, replacement);
            }

        }
        console.log(stops);
    }
    console.log('Ready for world tour! Planned stops: ' + stops)
}
worldTour(['Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'])