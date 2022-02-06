function addAndSubtract(arrayStart){
    let arrayNew = [];
    let arrayStartSum = 0;
    let arrayNewSum = 0;

    for (let i = 0; i < arrayStart.length; i++){
        let currentIndexNumber = arrayStart[i];
        arrayStartSum += currentIndexNumber;
        if (currentIndexNumber % 2 === 0){
            arrayNewSum += currentIndexNumber + i;
            arrayNew.push(currentIndexNumber + i);
        } else {
            arrayNewSum += currentIndexNumber - i;
            arrayNew.push(currentIndexNumber - i);
        }
    }
    console.log(arrayNew);
    console.log(arrayStartSum);
    console.log(arrayNewSum);
}
addAndSubtract([5, 15, 23, 56, 35])