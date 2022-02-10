function modernTimes(text) {
    let result = [];
    let textSplit = text.split(' ');

    for (let word of textSplit) {
        if (word[0] === '#' && word.length > 1) {
            let newWord = word.split('#');
            let okToPush = true;
            for (let char of newWord[1]) {
                let code = char.charCodeAt(0);
                if (!((code >= 65 && code <= 90) || (code >= 97 && code <= 122))) {
                    okToPush = false;
                }
            }
            if (okToPush === true) {
                result.push(newWord[1]);
            }
        }
    }
    console.log(result.join('\n'))
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')