function triangleOfNumbers(num){
    
    for (i = 1; i <= num; i++){
        let toPrint = ``
        for (j = 1; j <= i; j++){
            toPrint += `${i} `
        }
        console.log(toPrint);
    }
}
triangleOfNumbers(3)