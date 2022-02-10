function pascalCaseSplitter(text) {
    let result = [];
    let currentWord = [];
    for (let char of text) {
        let check = char.toUpperCase();
        if (char === check) {
            result.push(currentWord.join(''));
            currentWord = [char];
        } else {
            currentWord.push(char)
        }
    }
    result.push(currentWord.join(''));
    result.shift();
    console.log(result.join(', '))
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')