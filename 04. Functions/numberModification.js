function numberModification(num){
    function digitsAverage(num){    
        let numAsArray = num.toString().split('');
        let sum = 0;
        for (let i = 0; i < numAsArray.length; i++){
            let currentNum = Number (numAsArray[i]);
            sum += currentNum;
        }
        let average = sum / numAsArray.length;
        return average;
    }
    let numAsArray = num.toString().split('');
    while (true){  
        if (digitsAverage(num) > 5){
            console.log(num);
            return;
        } else {
            numAsArray.push(9);
            num = Number (numAsArray.join(""))
        }
    }
    
}
numberModification(101)