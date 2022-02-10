function problem3(nums) {
    let numbers = nums.split(' ').map(Number);
    let average = numbers.reduce((a, b) => a + b) / numbers.length
    let aboveAverage = numbers.filter((x) => x > average).sort((a, b) => b - a);
    let toPrint = []
    for (let i = 0; i < 5; i++){
        if (!isNaN(aboveAverage[i]))
        toPrint.push(aboveAverage[i])
    }
    console.log((toPrint.length === 0) ? 'No' : toPrint.join(' '));
}
problem3('1')