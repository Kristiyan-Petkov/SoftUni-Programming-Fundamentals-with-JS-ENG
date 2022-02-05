function loginV2 (list){
    let username = list.shift();
    let passwordAsList = username.split('');
    let passwordAsListReversed = passwordAsList.reverse();
    let password = passwordAsListReversed.join('');
    let attemptsCount = 0;

    while (true){
        let enteredPassword = list.shift();
        attemptsCount++
        if (enteredPassword === password){
            console.log(`User ${username} logged in.`);
            break;
        } else if (attemptsCount === 4){
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log("Incorrect password. Try again.");
        }
        
    }
}
loginV2(['Acer','login','go','let me in','let me in','recA'])