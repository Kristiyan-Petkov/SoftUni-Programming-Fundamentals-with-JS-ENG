function amazingNumbers (num){
    let numAsStr = num.toString();
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i++){
        sum += Number (numAsStr[i]);
    }
    let sumAsStr = sum.toString();
    let containsNine = false;
    for (let j = 0; j < sumAsStr.length; j++){
        // let currentDigit = Number (sumAsStr[j]);
        if (sumAsStr[j] == 9){
            containsNine = true;
        }
    }
    console.log(`${num} Amazing? ${containsNine ? 'True' : 'False'}`);

}
amazingNumbers(1233)