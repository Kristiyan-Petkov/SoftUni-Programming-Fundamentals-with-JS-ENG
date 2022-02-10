function problem1(array) {
    let studentsCount = Number(array.shift());
    let lecturesCount = Number(array.shift());
    let initialBonus = Number(array.shift());
    let arrayToNum = array.map(Number).sort((a,b) => b - a);
    let studentBonus = Math.ceil(arrayToNum[0] / lecturesCount * (5 + initialBonus))

    if (arrayToNum[0] > 0){
        console.log(`Max Bonus: ${studentBonus}.\nThe student has attended ${arrayToNum[0]} lectures.`);
    } else {
        console.log(`Max Bonus: 0.\nThe student has attended 0 lectures.`);
    }   
}
problem1([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
])