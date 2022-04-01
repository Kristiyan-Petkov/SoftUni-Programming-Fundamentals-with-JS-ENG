function secretChat(arr) {
    let message = arr.shift();
    while (arr[0] != 'Reveal') {
        let tokens = arr
            .shift()
            .split(':|:');
        switch (tokens[0]) {
            case "InsertSpace":
                let index = Number(tokens[1]);
                let halfOne = message.slice(0, index);
                let halfTwo = message.slice(index);
                message = halfOne + ' ' + halfTwo;
                console.log(message);
                break;
            case "Reverse":
                let reversed = tokens[1].split('').reverse().join('');
                let splitWork = message.includes(tokens[1]);
                if (splitWork) {
                    let split = message.split(tokens[1]);
                    if (split.length == 2){
                        message = split.join(reversed);
                    } else {
                        let replacementLength = tokens[1].length;
                        let counter = 0;
                        let targetIndex = -1;
                        for (let i = 0; i < message.length; i++){
                            if (counter == 0 & message[i] == tokens[1][0]){
                                targetIndex = i;
                                counter++;
                            } else if (counter > 0){
                                if (message[i] == tokens[1][counter]){
                                    counter++;
                                } else {
                                    counter = 0;
                                }
                            }
                            if (counter == replacementLength){
                                break;
                            }
                        }
                        let p1 = message.slice(0, targetIndex);
                        let p2 = message.slice((targetIndex + replacementLength));
                        message = p1 + p2 + reversed;
                    }
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;
            case "ChangeAll":
                message = message.split(tokens[1]).join(tokens[2]);
                console.log(message);
                break;
        }
    }
    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'Hiware?uiyjdjd',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])