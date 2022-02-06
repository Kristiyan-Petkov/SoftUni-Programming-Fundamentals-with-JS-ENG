function nonDecreasingSubsequence (array){
    let newArray = [array[0]];
    let prev = 0;
    // for (let i = 1; i < array.length; i++){
    //     let currentNum = array[i];
    //     let previousNum = newArray[prev];
    //     if (currentNum > previousNum){
    //         newArray.push(currentNum);
    //         prev++;
    //     }
    // }
    for (let i = 1; i < array.length; i++){
        let newArray2 = array.filter(function(value) {
            return value > newArray[prev]; });
        prev++;
        newArray.push(newArray2[0]);
        // console.log(newArray2.join(' '));
    }
    console.log(newArray.join(' '));
}
nonDecreasingSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24])