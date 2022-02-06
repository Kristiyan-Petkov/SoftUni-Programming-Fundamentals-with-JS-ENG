function sumDigits (num){
    let sum = 0;
    let numAsStr = num.toString();
    // for (i = 0; i < numAsStr.length; i++){
    //     sum += Number (numAsStr[i])
    // }
    for (let digit of numAsStr){
        sum += Number (digit)
    }
    console.log(sum);

}
sumDigits(245678)