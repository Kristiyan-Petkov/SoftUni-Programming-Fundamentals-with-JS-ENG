function hardWords(input) {
    let keyWords = input[1];
    let newText = '';
    for (let char of input[0]) {
        if (char !== '\\') {
            newText += char
        }
    }
    newText = newText.split(' ');
    for (let i = 0; i < newText.length; i++) {
        let word = newText[i];
        if (word[0] === '_' && word[word.length - 1] === '_') {
            let replacementWord1 = keyWords.filter(x => x.length === word.length);
            newText[i] = replacementWord1[0]
        } else if (word[0] === '_' && word[word.length - 1] !== '_') {
            let punctuation = word[word.length - 1];
            let replacementWord2 = keyWords.filter(x => x.length === word.length - 1);
            newText[i] = replacementWord2[0] + punctuation;
        }
    }
    console.log(newText.join(' '))
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])