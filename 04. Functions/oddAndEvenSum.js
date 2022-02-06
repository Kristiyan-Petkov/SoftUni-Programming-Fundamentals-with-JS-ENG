function oddAndEvenSum(num){
    let numAsString = num.toString();
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < numAsString.length; i++){
        let currentNum = Number (numAsString[i]);
        if (currentNum % 2 === 0){
            sumEven += currentNum;
        } else {
            sumOdd += currentNum;
        }
    }

    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}
oddAndEvenSum(1000435)