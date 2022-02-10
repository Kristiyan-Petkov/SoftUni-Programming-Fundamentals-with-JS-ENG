function problem2(array) {
    let targets = array
        .shift()
        .split(' ')
        .map(Number);
    let shotsCounter = 0;
    for (let i = 0; i < array.length - 1; i++) {
        let targetedNum = targets[array[i]];
        if (targetedNum >= 0) {
            shotsCounter++;
            targets[array[i]] = -1;
            for (let j = 0; j < targets.length; j++) {
                if (targets[j] <= targetedNum && targets[j] !== -1) {
                    targets[j] += targetedNum;
                } else if (targets[j] > targetedNum) {
                    targets[j] -= targetedNum;
                }
            }
        }
    }
    console.log(`Shot targets: ${shotsCounter} -> ${targets.join(' ')}`);
}
problem2(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])