function problem1(array) {
    let studentsCount = Number(array.shift());
    let lecturesCount = Number(array.shift());
    let initialBonus = Number(array.shift());
    let arrayToNum = array.map(Number);
    let maxAttendance = Math.max(...arrayToNum);
    let studentBonus = maxAttendance / lecturesCount * (5 + initialBonus)

    console.log(`Max Bonus: ${Math.ceil(studentBonus)}.\nThe student has attended ${maxAttendance} lectures.`);
}
problem1([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
])