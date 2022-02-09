function train (input){
    let trainWagons = input
        .shift()
        .split(' ')
        .map(Number);
    let wagonCapacity = Number (input.shift());

    for (let i = 0; i < input.length; i++){
        let currentPassengers = input[i].split(' ');
        if (currentPassengers[0] === 'Add'){
            trainWagons.push(Number (currentPassengers[1]))
        } else {
            for (let j = 0; j < trainWagons.length; j++){
                if (trainWagons[j] + Number (currentPassengers[0]) <= wagonCapacity){
                    trainWagons[j] += Number (currentPassengers[0]);
                    break;
                }
            }
        }

    }



    console.log(trainWagons.join(' '));

}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])