function smallestNumber(num1, num2, num3) {
    let array = [num1, num2, num3];
    console.log(Math.min.apply(null, array));
}
smallestNumber(2, 5, 3)