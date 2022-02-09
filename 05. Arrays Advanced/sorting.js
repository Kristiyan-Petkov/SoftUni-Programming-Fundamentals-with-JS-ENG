function sorting(array) {
    array.sort((a, b) => a - b);
    let newArray = [];
    let loopL = array.length;
    for (let i = 0; i < loopL / 2; i++) {
        newArray.push(array.pop());
        newArray.push(array.shift());
    }
    console.log(newArray.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])