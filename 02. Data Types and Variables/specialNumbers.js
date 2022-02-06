function specialNumbers (num){
    let numSum = 0;
    for (let i = 1; i <= num; i++){
        let numAsStr = i.toString();
        // console.log(numAsStr);
        // console.log('-');
        for (j = 1; j < (numAsStr.length + 1); j++){
            numSum += Number (numAsStr[j-1]);
        }
        // console.log(numSum);
        // console.log('----------');
        // let result = numSum === 5 ? `${i} -> True` : `${i} -> False`;
        // console.log(result);
        if (numSum === 5 || numSum === 7 || numSum === 11){
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        numSum = 0;
        // result = ``;
    }
}
specialNumbers(15)