function palindromeIntegers(array) {
    function palindromes(num) {
        let numAsString = num.toString();
        let result = true;
        if (numAsString.length === 1) {
            return result;
        } else if (numAsString.length % 2 === 0) {
            for (let i = 0; i < numAsString.length / 2; i++) {
                for (let j = numAsString.length - 1; j > numAsString.length / 2 - 1; j--) {
                    let numLeft = Number(numAsString[i]);
                    let numRight = Number(numAsString[j]);
                    // console.log(`left = ${numLeft} --- right = ${numRight}`);
                    if (numLeft !== numRight) {
                        result = false;
                        return result;
                    }
                }
            }
        } else {
            for (let k = 0; k < numAsString.length / 2 - 1; k++) {
                for (let l = numAsString.length - 1; l > numAsString.length / 2; l--) {
                    let numLeft = Number(numAsString[k]);
                    let numRight = Number(numAsString[l]);
                    // console.log(`left = ${numLeft} --- right = ${numRight}`);
                    if (numLeft !== numRight) {
                        result = false;
                        return result;
                    }
                }
            }
        }
        return result;
    }
    let result = ``;
    for (let k = 0; k < array.length; k++) {
        result += `${palindromes(array[k])}`;
        if (k < array.length - 1) {
            result += `\n`
        }
    }
    return result;

}
palindromeIntegers([32, 2, 232, 1010])