function repeatString(stringStart, executionsNum){

    let toPrint = ``
    for (let i = 0; i < executionsNum; i++){
        toPrint += stringStart;
    }
    console.log(toPrint);
}
repeatString('abc', 3)
repeatString('String', 2)