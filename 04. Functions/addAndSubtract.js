function addAndSubtract(num1, num2, num3) {
    // let sum = num1 + num2;
    // let substract = sum - num3;
    // return substract;
    function sum(num1, num2) {
        let result = num1 + num2;
        return result;
    }
    function substract(num1, num2) {
        let result = num1 - num2;
        return result;
    }
    let numberSum = sum(num1, num2);
    let result = substract(numberSum,num3);
    return result;

}
console.log(addAndSubtract(23, 6, 10));
