function lastKNums(n, k){
    let array = [1];

    for (let i = 1; i < n; i++){
        let sum = 0;
        for (let j = array.length - k; j < array.length; j++){
            if (j < 0){
                continue;
            }
            sum+= array[j];
        }
        array.push(sum);
    }

    console.log(array.join(' '));
}
lastKNums(6, 3)