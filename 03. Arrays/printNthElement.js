function printNthElement(array){
    let step = Number (array[array.length - 1]);
    let toPrint = [];
    for (let i = 0; i < array.length - 1; i+= step){
        toPrint.push(array[i]);
    }
    console.log(toPrint.join(' '));

}
printNthElement(['5', '20', '31', '4', '20', '2'])