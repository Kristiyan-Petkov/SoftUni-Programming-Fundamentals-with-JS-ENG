function calculator(number1, operator, number2) {
    let numberAsStr1 = number1.toString();
    let numberAsStr2 = number2.toString();
    let output = eval(numberAsStr1 + operator + numberAsStr2);
    console.log(output.toFixed(2));
}
calculator(5,
    '+',
    10
)