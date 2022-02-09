function bitPosition1(n){
    let binaryNum = [];
    while (n > 0){
        binaryNum.push((n % 2).toFixed(0));
        n = Math.floor(n / 2);
    }
    let loopLength = 8 - binaryNum.length;
    if (binaryNum.length < 8){
        for (let i = 0; i < loopLength; i++){
            binaryNum.push('0');
        }
    }
    binaryNum.reverse();
    console.log(binaryNum[6]);
}
bitPosition1(24)