function arrayRotation (array, rotationsNum){
    for (let i = 0; i < rotationsNum; i++){
        array.push(array[0]);
        array.shift();
    }
    console.log(array.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)