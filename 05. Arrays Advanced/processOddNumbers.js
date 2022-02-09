function processOddNumbers(array) {
    let newArray = array.filter((x,i) => i % 2 !== 0);
    let doubled = newArray.map(x => x * 2);
    doubled.reverse();
    console.log(doubled.join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3])