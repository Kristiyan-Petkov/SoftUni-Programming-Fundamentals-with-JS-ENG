function signCheck(numOne, numTwo, numThree){
    let isNegative = 0;
    if (numOne < 0){
        isNegative++
    }
    if (numTwo < 0){
        isNegative++
    }
    if (numThree < 0){
        isNegative++
    }
    if (isNegative % 2 !== 0){
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}
signCheck(5, 12, -15)