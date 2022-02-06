function rightPlace (word, letter, comparisonExample){
    let newWord = '';
    for (let i = 0; i < word.length; i++){
        let currentLetter = word[i];
        if (currentLetter !== '_'){
            newWord += currentLetter;
        } else {
            newWord += letter;
        }
    }

    if (newWord === comparisonExample){
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}
rightPlace('Str_ng', 'i', 'String')