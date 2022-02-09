function lastKNumsV2(n, k) {
    let result = [1];
    for (let i = 0; i < n - 1; i++) {
        // let current = 0;
        let elements = result.slice(-k);
        result.push(elements.reduce((a, b) => a + b));
    }
    // return result.join(' ');
    console.log(result.join(' '));
}
lastKNumsV2(6, 3)