function palindromeIntegers(array) {
    for (let number of array){
        let numberAsString = number.toString();
        let numberInversedString = numberAsString.split('').reverse().join('')
        if (numberAsString === numberInversedString){
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeIntegers([32, 2, 232, 1010])