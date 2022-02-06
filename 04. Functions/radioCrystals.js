function radioCrystals(array) {
    let target = Number(array[0]);
    let lastOperation = '';
    let lastOperationCounter = 0;
    for (let i = 1; i < array.length; i++){
        let start = Number(array[i]);
        console.log(`Processing chunk ${start} microns`);
        
        while (target < start) {
            console.log(start);
            if (start / 4 >= target) {
                if (lastOperation !== 'Cut') {
                    lastOperation = 'Cut';
                    lastOperationCounter = 1;
                    start /= 4;
                } else {
                    start /= 4;
                    lastOperationCounter++;
                }
            } else if (start >= target * 1.2) {
                if (lastOperation !== 'Lap') {
                    console.log(`${lastOperation} x${lastOperationCounter}`);
                    start = Math.floor(start);
                    console.log('Transporting and washing');
                    lastOperation = 'Lap';
                    lastOperationCounter = 1;
                    start *= 0.8;
                } else {
                    start *= 0.8;
                    lastOperationCounter++;
                }
            } else if (start >= target + 20) {
                if (lastOperation !== 'Grind') {
                    console.log(`${lastOperation} x${lastOperationCounter}`);
                    start = Math.floor(start);
                    console.log('Transporting and washing');
                    lastOperation = 'Grind';
                    lastOperationCounter = 1;
                    start -= 20;
                } else {
                    start -= 20;
                    lastOperationCounter++;
                }
            } else if (start >= target + 1){
                if (lastOperation !== 'Etch') {
                    console.log(`${lastOperation} x${lastOperationCounter}`);
                    start = Math.floor(start);
                    console.log('Transporting and washing');
                    lastOperation = 'Etch';
                    lastOperationCounter = 1;
                    start -= 2;
                } else {
                    start -= 2;
                    lastOperationCounter++;
                }
            }
            console.log('END WHILE LOOP');
        }
        console.log(`${lastOperation} x${lastOperationCounter}`);
        start = Math.floor(start);
        console.log('Transporting and washing');
        if (start === target){
            console.log(`Finished crystal ${start} microns`);
        } else {
            start++;
            console.log(`X-ray x1`);
            console.log(`Finished crystal ${start} microns`);
        }
    }
}
radioCrystals([1000, 8100])