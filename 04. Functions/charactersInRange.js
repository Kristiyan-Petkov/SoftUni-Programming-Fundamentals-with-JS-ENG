function charactersInRange(charA, charB){
    function charToAscii (character){
        let code = character.charCodeAt();
        return code;
    }
    let result = ``;
    if (charToAscii(charA) < charToAscii(charB)){
        for (let i = charToAscii(charA) + 1; i < charToAscii(charB); i++){
            let reconvertedCharacter = String.fromCharCode(i);
            result += `${reconvertedCharacter} `;
        }
    } else {
        for (let j = charToAscii(charB) + 1; j < charToAscii(charA); j++){
            let reconvertedCharacter = String.fromCharCode(j);
            result += `${reconvertedCharacter} `;
        }
    }
    return result;
    // console.log(charB.charCodeAt());
}
charactersInRange('C','#')