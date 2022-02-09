function arrayManipulations(input) {
    let array = input
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < input.length; i++) {
        let currentCommandSplit = input[i].split(' ');
        let command = currentCommandSplit[0];
        let action = Number (currentCommandSplit[1]);
        switch (command) {
            case "Add": 
                addElement(action);
                // console.log('add ' + array);
                break;
            case "Remove": 
                // array.splice(array.indexOf(action), 1);
                array = array.filter(el => el !== action);
                // console.log('Remove' + array);
                break;
            case "RemoveAt": 
                array.splice(action, 1);
                // console.log('Remove At' + array);
                break;
            case "Insert": 
                let index = Number (currentCommandSplit[2]);
                let numToAdd = Number (currentCommandSplit[1]);
                array.splice(index, 0, numToAdd);
                // console.log('Remove At' + array);
                break;
        }
    }
    return array.join(' ')

    function addElement(element){
        array.push(element);
    }
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)