function rotateArray (array){
    let rotations = Number (array[array.length - 1]);
    let newArray = [];
    for (let i = 0; i < array.length - 1; i++){
        newArray.push(array[i]);
    }
    for (let j = 1; j <= rotations; j++){
        newArray.unshift(newArray[newArray.length - 1]);
        newArray.pop(newArray[newArray.length - 1]);
    }
    console.log(newArray.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])