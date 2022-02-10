function replaceRepeatingChars(text) {
    let newText = [];
    for (let char of text) {
        let check = newText[newText.length - 1];
        // console.log(check)
        // console.log(char)
        // console.log('------------')
        if (char !== check) {
            newText.push(char);
        }
    }
    console.log(newText.join(''))
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')