function maxSequenceOfEqualElements (array){
    let maxSequenceCounter = 0;
    let maxSequence = [array[0]];
    let previousNum = array[0];
    let currentCounter = 1;
    let currentSequence = [array[0]];

    for (let i = 1; i < array.length; i++){
        let currentNum = array[i];
        if (currentNum === previousNum){
            currentCounter++;
            currentSequence.push(currentNum);
            previousNum = currentNum;
            if (currentCounter > maxSequenceCounter){
                maxSequenceCounter = currentCounter;
                maxSequence = [];
                maxSequence = currentSequence;
            }
        } else {
            currentSequence = [];
            currentCounter = 1;
            previousNum = currentNum;
            currentSequence.push(currentNum);
        }
        // console.log(currentSequence);
        // console.log(maxSequence);
        // console.log(currentSequence);
        // console.log('-------------');
    }
    if (currentCounter > maxSequenceCounter){
        console.log(currentSequence.join(' '));
    } else {
        console.log(maxSequence.join(' '));
    }

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])