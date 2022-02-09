function equalNeighbors(array){
    let arr1 = array[0];
    let arr2 = array[1];
    let arr3 = array[2];
    let arr4 = array[3];
    let neightborPairs = 0;
    let previousElement1;
    let previousElement2;
    let previousElement3;
    let previousElement4;
    
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] === previousElement1){
            neightborPairs++;
        }
        if (arr2[i] === previousElement2){
            neightborPairs++;
        }
        if (arr3[i] === previousElement3){
            neightborPairs++;
        }
        
        if (arr1[i] === arr2[i]){
            neightborPairs++;
        }
        if (arr2[i] === arr3[i]){
            neightborPairs++;
        }
        
        if (array.length > 3){
            if (arr4[i] === previousElement4){
                neightborPairs++;
            }
            if (arr3[i] === arr4[i]){
                neightborPairs++;
            }
            previousElement4 = arr4[i];
        }
        previousElement1 = arr1[i];
        previousElement2 = arr2[i];
        previousElement3 = arr3[i];
    }
    console.log(neightborPairs);
}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)