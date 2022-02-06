function maxNumber(array){
    let top = [];
    for (let i = array.length - 1; i >= 0; i--){
        let topIntegerFlag = true;
        let currentNum = array[i];
        for (let j = i+1; j < array.length; j++){
            let compareVsCurrent = array[j];
            if (compareVsCurrent >= currentNum){
                topIntegerFlag = false;
            }
        }
        if (topIntegerFlag === true){
            top.push(currentNum);
        }
    }
    let reversed = top.reverse();
    console.log(reversed.join(' '));
}
maxNumber([41, 41, 34, 20])