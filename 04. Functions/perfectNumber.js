function perfectNumber(num){
    let sumOfDividers = 0;
    for (let i = 1; i < num; i++){
        if (num % i === 0){
            sumOfDividers += i;
        }
    }
    if (sumOfDividers === num){
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(6)