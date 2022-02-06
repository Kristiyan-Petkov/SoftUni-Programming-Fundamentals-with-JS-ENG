function digitsAverage(num){    
    let numAsArray = num.toString().split('');
    let sum = 0;
    for (let i = 0; i < numAsArray.length; i++){
        let currentNum = Number (numAsArray[i]);
        sum += currentNum;
    }
    let average = sum / numAsArray.length;
    return average
    
}
digitsAverage(1019999)