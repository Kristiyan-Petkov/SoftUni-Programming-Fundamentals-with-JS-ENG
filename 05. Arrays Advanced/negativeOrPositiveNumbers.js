function negativeOrPositiveNumbers(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        let currentNum = array[i];
        if (currentNum >= 0){
            newArray.push(currentNum);
        } else {
            newArray.unshift(currentNum);
        }
    }
    for (let j = 0; j < newArray.length; j++){
        console.log(newArray[j]);
    }
}
negativeOrPositiveNumbers([7, -2, 8, 9])