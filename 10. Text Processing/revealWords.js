function revealWords(word, text) {
    let wordSplit = word.split(', ');
    let result = text;
    for (let i = 0; i < wordSplit.length; i++) {
        let toReplace = '*'.repeat(wordSplit[i].length);
        result = result.replace(toReplace, wordSplit[i]);
    }
    console.log(result)
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')