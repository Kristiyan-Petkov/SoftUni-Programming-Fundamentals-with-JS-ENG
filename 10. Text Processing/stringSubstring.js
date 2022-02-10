function stringSubstring(word, text) {
    let textSplit = text.split(' ');
    let wordLowerCase = word.toLowerCase();
    for (let part of textSplit) {
        let partLowerCase = part.toLowerCase();
        if (partLowerCase === wordLowerCase) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`)
}
stringSubstring('javascript',
    'JavaScript is the best programming language'
)