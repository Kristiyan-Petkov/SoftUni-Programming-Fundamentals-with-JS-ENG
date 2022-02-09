function bitDestroyer(n, p) {
    let binaryNum = [];
    while (n > 0) {
        binaryNum.push((n % 2).toFixed(0));
        n = Math.floor(n / 2);
    }
    binaryNum.splice(p, 1, 0)
    console.log(binaryNum);
}
bitDestroyer(1313, 5)