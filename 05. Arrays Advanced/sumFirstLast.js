function sumFirstLast (array){
    // let sum = Number (array[0]) + Number (array[array.length - 1]);
    // return sum;
    let first = Number (array.shift());
    let last = Number (array.pop());
    return first + last;
}
sumFirstLast(['20', '30', '40'])