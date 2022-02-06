function triplesOfLatinLetters(num) {
    let toPrint1 = ``;
    let toPrint2 = ``;
    let toPrint3 = ``;
    for (let i = 1; i <= num; i++){
        toPrint1 += String.fromCharCode(96 + i);
        for (let j = 1; j <= num; j++){
            toPrint2 += String.fromCharCode(96 + j);
            for (let k = 1; k <= num; k++){
                toPrint3 += String.fromCharCode(96 + k);
                console.log(toPrint1 + toPrint2 + toPrint3);
                toPrint3 = ``;
            }
            toPrint2 = ``;
        }
        toPrint1 = ``;
    }
}
triplesOfLatinLetters(3)