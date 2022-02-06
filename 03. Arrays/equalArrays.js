function equalArrays(input1, input2) {
    let identical = 1;
    let indexDiff = 0;
    let sum = 0;

    for (i = 0; i < input1.length; i++) {
        let tempInput1 = input1[i];
        let tempInput2 = input2[i];
        if (tempInput1 !== tempInput2) {
            identical--;
            indexDiff = i;
            break;
        } else {
            sum += Number(tempInput1);
        }
    }
    
    let result = identical === 1 ? `Arrays are identical. Sum: ${sum}` : `Arrays are not identical. Found difference at ${indexDiff} index`
    console.log(result);

}
equalArrays(['10', '20', '30'], ['10', '22', '30'])