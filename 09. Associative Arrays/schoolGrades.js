function schoolGrades(input){
    let gradesBook = [];

    for (let strings of input){
        let stringTokens = strings.split(' ');
        let name = stringTokens.shift();
        let gradesCount = stringTokens.length;
        let totalGrade = stringTokens.map(Number).reduce((a,b) => a + b);
        let averageGrade = totalGrade / gradesCount;
        let gradesHolder = stringTokens.slice(0).map(Number);
        let nameExists = gradesBook.find(o => o.name === name);
        if (nameExists === undefined){
            let student = {
                name: name,
                gradesCount: gradesCount,
                averageGrade: averageGrade,
                gradesHolder: gradesHolder,
            }
            gradesBook.push(student);
        } else {
            let objectIndex = gradesBook.findIndex(x => x.name === name);
            let currentGradesHolder = gradesBook[objectIndex].gradesHolder;
            let newGradesHolder = currentGradesHolder;
            for (let grade of gradesHolder){
                newGradesHolder.push(grade);
            }
            gradesBook[objectIndex].gradesHolder = newGradesHolder.slice(0);
            gradesBook[objectIndex].averageGrade = gradesBook[objectIndex].gradesHolder.reduce((a,b) => a + b) / gradesBook[objectIndex].gradesHolder.length
        }
    }
    gradesBook.sort((a,b) => a.averageGrade - b.averageGrade)
    for (let rank of gradesBook){
        console.log(`${rank.name}: ${rank.gradesHolder.join(', ')}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])