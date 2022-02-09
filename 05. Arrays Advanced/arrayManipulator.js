function arrayManipulator(array, commands) {
    for (let element of commands) {
        let command = element.split(' ');
        switch (command[0]) {
            case "add":
                array.splice(Number(command[1]), 0, Number(command[2]));
                break;
            case "addMany":
                let elementsToInclude = command
                    .slice(2)
                    .map(Number)
                array.splice((Number(command[1])), 0, ...elementsToInclude);
                break;
            case "contains":
                console.log(array.indexOf(Number(command[1])));
                break;
            case "remove":
                array.splice((Number(command[1])), 1);
                break;
            case "shift":
                for (let i = Number(command[1]); i > 0; i--) {
                    let numToMove = array.shift();
                    array.push(numToMove);
                }
                break;
            case "sumPairs":
                let loopLength = array.length / 2
                if (array.length % 2 === 0) {
                    for (let j = 0; j < loopLength; j++) {
                        let pair = array.splice(0, 2).reduce((a, b) => a + b, 0)
                        array.push(pair);
                    }
                } else {
                    for (let j = 1; j < loopLength; j++) {
                        let pair = array.splice(0, 2).reduce((a, b) => a + b, 0)
                        array.push(pair);
                    }
                    array.push(array.shift())
                }
                break;
            case "print":
                console.log(`[ ${array.join(', ')} ]`);
                return;
        }
    }
}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])