function printCertificate (grade, names){
    printHeader();
    printName(names);
    grades(grade);

    function printHeader(){
        console.log('---HEADER---');
    }
    function printName (array){
        console.log(`${array[0]} ${array[1]}`); 
    }
    function grades(grade){
        if (grade < 3.00){
            console.log(`Fail (${grade.toFixed(0)})`);
        } else if (grade >= 3.00 && grade < 3.50){
            console.log(`Poor (${grade.toFixed(2)})`);
        } else if (grade >= 3.50 && grade < 4.50){
            console.log(`Good (${grade.toFixed(2)})`);
        } else if (grade >= 4.50 && grade < 5.50){
            console.log(`Very good (${grade.toFixed(2)})`);
        } else {
            console.log(`Excellent (${grade.toFixed(2)})`);
        }
    }
}
printCertificate(5.25, ['Peter', 'Carter'])

