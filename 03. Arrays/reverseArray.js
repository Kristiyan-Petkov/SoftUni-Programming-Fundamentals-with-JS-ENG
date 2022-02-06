function reverseArray (num, arrayInput){
    let arrayNew = [];
    let newArrayElements = '';

    for (i = 0; i < num; i++){
        arrayNew.push(arrayInput[i]);
    }
    for (j = num-1; j >= 0; j--){
        newArrayElements += `${arrayNew[j]} `;
    }
    console.log(newArrayElements);

}
reverseArray(3, [10, 20, 30, 40, 50])