function equalSums(array){
    let sumLeft = 0;
    let sumRight = 0;
    let workingIndex = 0;
    let works = true;
    
    if (array.length === 1){
        console.log(0);
        return;
    }
    
    for (let m = 0; m < array.length; m++){
        if (workingIndex === 0){
            for (i = 1; i < array.length; i++){
                sumRight += array[i]
            }
            if (sumLeft === sumRight){
                console.log(0);
                return;
            } else {
                sumRight = 0;
            }
        } else if (workingIndex === array.length-1){
                for (j = array.length-2; j >= 0; j--){
                    sumLeft += array[j]
                }
                if (sumLeft === sumRight){
                    console.log(workingIndex);
                    return;
                } else {
                    sumLeft = 0;
                }
                
        } else {
            for (k = workingIndex - 1; k >= 0; k--){
                sumLeft += array[k]
            }
            for (l = workingIndex + 1; l < array.length; l++){
                sumRight += array[l]
            }
            if (sumLeft === sumRight){
                console.log(workingIndex);
                return;
            } else {
                sumLeft = 0;
                sumRight = 0;
            }
            sumLeft = 0;
            sumRight = 0;
        }
        workingIndex++;
    }
    console.log('no');
}
equalSums([1, 2, 3, 3])