function binaryDigitsCount(n, b) {
    let initialNum = n;
    let binaryNum = [];
    while (n > 0){
        binaryNum.push((n % 2).toFixed(0));
        n = Math.floor(n / 2);
    }
    binaryNum.reverse();
    let zeroesCounter = 0;
    for (let i = 0; i < binaryNum.length; i++){
        if (binaryNum[i] === '0'){
            zeroesCounter++;
        }
    }
    console.log(`${initialNum} -> ${binaryNum.join('')}`);
    console.log(`We have ${zeroesCounter} zeroes.`);
}
binaryDigitsCount(10,
    0)