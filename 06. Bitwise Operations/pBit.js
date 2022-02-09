function pBit(n, p){
    let binaryNum = [];
    while (n > 0){
        binaryNum.push((n % 2).toFixed(0));
        n = Math.floor(n / 2);
    }
    console.log(binaryNum[p]);
}
pBit(2145, 5)