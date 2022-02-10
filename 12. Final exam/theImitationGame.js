function theImitationGame(input) {
    let message = input.shift();

    while (input[0] !== 'Decode') {
        let line = input.shift().split('|');
        switch (line[0]) {
            case 'ChangeAll':
                let occurence = line[1];
                let replacement = line[2];
                let replacedString = message.replace(occurence, replacement);
                while (replacedString.includes(occurence)){
                    let loopString = replacedString.replace(occurence, replacement);
                    replacedString = loopString;
                }
                message = replacedString;
                break;
            case 'Insert':
                let targetIndex = Number (line[1]);
                let valueToInsert = line[2];
                let insertedString = message.slice(0,targetIndex) + valueToInsert + message.slice(targetIndex);
                message = insertedString;
                break;
            case 'Move':
                let charNumToMove = Number (line[1]);
                let movedString = message.slice(charNumToMove) + message.slice(0,charNumToMove);
                message = movedString;
                break;
        }
    }
    console.log('The decrypted message is: ' + message);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])