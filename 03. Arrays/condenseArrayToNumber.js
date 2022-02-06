function condenseArrayToNumber(input){
    if (input.length === 1){
        console.log(input[0]);
        return;
    }
    let arrayNew = [];
    for (i = 0; i < input.length; i++){
        arrayNew.push(input[i]);
    }
    
    // console.log(arrayNew);
    while (arrayNew.length !== 1){
        for (j = 0; j < arrayNew.length - 1; j++){
            let element1 = Number(arrayNew[0]);
            let element2 = Number(arrayNew[1]);
            let sum = element1 + element2;
            arrayNew.push(sum);
            arrayNew.shift();
        }
        arrayNew.shift();
    }
    console.log(arrayNew[0]);

}
condenseArrayToNumber([5,0,4,1,2])