function countStringOccurrences(text, word) {
    let textSplit = text.split(' ');
    let counter = 0;
    for (let words of textSplit) {
        if (words === word) {
            counter += 1;
        }
    }
    console.log(counter)
}
countStringOccurrences("This is a word and it also is a sentence",
    "is")