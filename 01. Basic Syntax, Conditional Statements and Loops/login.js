function login(input){
    let username = input[0];
    let index = 1;
    let currentInputPosition = input[index];
    let inputL = input.length;
    let attemptsCount = 0;

    for (i = 1; i < inputL; i++){
        attemptsCount++
        let currentInputPositionLength = currentInputPosition.length;
        let passwordAttempt = ``;
        for (j = currentInputPositionLength; j > 0; j--){
            passwordAttempt += currentInputPosition[currentInputPositionLength - 1];
            currentInputPositionLength--
        }
        
        if (passwordAttempt == username){
            console.log(`User ${username} logged in.`);
            return;
        } else if (attemptsCount >= 4){
            console.log(`User ${username} blocked!`);
            return;
        } else {
            console.log("Incorrect password. Try again.");
        }
        index++
        currentInputPosition = input[index];
    } 

}
login(['Acer','login','go','let me in','recA'])