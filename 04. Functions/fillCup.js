// by reference
function fillCup(arr) {
    arr.push(5);
    console.log('Inside function', arr);
}

let myArr = [1, 2, 3, 4];
console.log('Before',myArr);

fillCup(myArr);
console.log('After',myArr);

console.log('------------------------------------');
// by value
function fillByValue(num){
    num++;
    console.log('Inside', num);
}

let myNum = 4;
console.log('Before', myNum);

fillByValue(myNum);

console.log('After', myNum);