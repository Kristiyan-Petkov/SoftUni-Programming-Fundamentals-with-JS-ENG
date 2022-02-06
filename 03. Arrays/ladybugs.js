function ladybugs(array) {
    let fieldSize = array[0];
    let ladybugsPositions = array[1];
    let field = [];
    let split = ladybugsPositions.split(' ');
    for (let i = 0; i < fieldSize; i++) {
        field.push(0);
        for (let j = 0; j < split.length; j++) {
            if (i === Number(split[j])) {
                field[i] = 1;
            }
        }
    }
    for (let k = 2; k < array.length; k++) {
        let commandSplit = array[k].split(' ');
        let positionToActivate = Number(commandSplit[0]);
        let direction = commandSplit[1];
        let flightRange = Number(commandSplit[2]);
        if (positionToActivate < 0 || positionToActivate > field.length - 1){
            continue;
        }
        switch (direction) {
            case "left":
                field[positionToActivate] = 0;
                if (positionToActivate >= flightRange){
                    for (let l = positionToActivate - flightRange; l >= 0; l--){
                        if (field[l] === 0){
                            field[l] = 1;
                            break;
                        }
                    }
                }
                break;
            case "right":
                field[positionToActivate] = 0;
                if (flightRange <= field.length - positionToActivate - 1){
                    for (let l = positionToActivate + flightRange; l < field.length; l++){
                        if (field[l] === 0){
                            field[l] = 1;
                            break;
                        }
                    }
                }
                break;
        }
    }
    console.log(field.join(' '));
}
ladybugs([ 5, '3',
'3 left 2',
'1 left -2']
)