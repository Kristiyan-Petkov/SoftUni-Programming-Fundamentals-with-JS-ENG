function magicSum(array, targetNum){
    let arrayNums = [];
    let print = 0;
    for (let i = 0; i < array.length; i++){
        for (let j = array.length; j >= 0; j--){
            if (i !== j){
                let sum = array[i] + array[j];
                if (sum === targetNum){
                    if (!arrayNums.includes(array[i])){
                        console.log(`${array[i]} ${array[j]}`);
                        arrayNums.push(array[i], array[j]);
                        print++;
                    }
                }
            }
        }
    }
    if (print === 0){
        let sum2 = array[0] + array[0];
        if (sum2 === targetNum){
                console.log(`${array[0]} ${array[0]}`);
            }
        }
    }
magicSum([14],
    28)