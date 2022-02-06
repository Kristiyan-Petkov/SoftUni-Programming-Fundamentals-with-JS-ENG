function passwordValidator(password) {
    function isLeghtOK(string) {
        let lenghtIsOK = true;
        if (string.length < 6 || string.length > 10) {
            lenghtIsOK = false;
        }
        return lenghtIsOK;
    }
    function onlyLettersAndDigits(string) {
        for (let char of string) {
            let charCode = char.charCodeAt(0);
            if (!(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
                return false;
            }

        }
        return true;
    }

    function atLeastTwoDigits(string) {
        let counter = 0;
        for (let char of string) {
            let charCode = char.charCodeAt(0);
            if (charCode >= 48 && charCode <= 57) {
                counter++;
            }
        }
        return counter >= 2;
    }
    let validLength = isLeghtOK(password);
    let lettersAndDigits = onlyLettersAndDigits(password);
    let twoDigits = atLeastTwoDigits(password);
    if (validLength && lettersAndDigits && twoDigits){
        return 'Password is valid'
    }
    if (!validLength){
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (!lettersAndDigits){
        console.log(`Password must consist only of letters and digits`);
    }
    if (!twoDigits){
        console.log(`Password must have at least 2 digits`);
    }

}
passwordValidator('logIn')