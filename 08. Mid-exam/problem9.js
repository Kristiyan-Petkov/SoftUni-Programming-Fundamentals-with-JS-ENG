function problem9(nums){
    let array = nums
        .split(' ')
        .map(Number);
    let average = array.reduce((a,b) => a + b) / array.length;
    let result = array
        .filter(x => x > average)
        .sort((a,b) => b - a)
        .slice(0,5);
    return result.length === 0 ? 'No' : result.join(' ');
}
problem9('5 2 3 60 60 51')