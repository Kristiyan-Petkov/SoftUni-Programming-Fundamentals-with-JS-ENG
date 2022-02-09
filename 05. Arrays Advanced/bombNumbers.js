function bombNumbers(array, bomb){
    let bombNum = bomb[0];
    if (array.indexOf(bombNum) < 0){
        return
    }
    let bombForce = bomb[1];
    let bombNumIsPresent = array.indexOf(bombNum)
    while (bombNumIsPresent >= 0){
        let start = array.indexOf(bombNum) - bombForce;
        let positionsRoRemove = bombForce*2 + 1;
        if (start < 0){
            positionsRoRemove = positionsRoRemove + start;
            start = 0;
        }
        array.splice(start, positionsRoRemove);
        bombNumIsPresent = array.indexOf(bombNum);
        // console.log(array);
        // console.log(positionsRoRemove);
    }
    let sum = array.reduce((a,b) => a + b);
    return sum;
    // console.log(sum);
    // console.log(array);
}
bombNumbers([1, 1, 1, 1, 3],
    [3, 3]
    )