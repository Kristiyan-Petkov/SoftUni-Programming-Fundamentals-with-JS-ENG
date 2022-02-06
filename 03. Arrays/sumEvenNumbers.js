function sumEvenNumbers(input){
    sum = 0;
    for (let element of input){
        if (element % 2 === 0){
            sum += Number (element);
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1','2','3','4','5','6'])