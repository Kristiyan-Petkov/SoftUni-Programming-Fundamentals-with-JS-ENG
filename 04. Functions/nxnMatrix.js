function nxnMatrix(num){
    let matrix = ``;
    for (let i = 1; i <= num; i++){
        let currentLine = ``;
        for (let j = 1; j <= num; j++){
            if (j !== num){
                currentLine += `${num} `
            } else {
                currentLine += `${num}\n`
            }
        }
        matrix += currentLine;
    }
    return matrix;
}
nxnMatrix(3)