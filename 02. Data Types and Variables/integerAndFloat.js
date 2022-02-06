function integerAndFloat (num1, num2, num3){
    let sum = num1 + num2 + num3;
    if (sum % 1 === 0){
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
    // console.log(Number.isInteger(sum));
}
integerAndFloat(100, 200, 303)