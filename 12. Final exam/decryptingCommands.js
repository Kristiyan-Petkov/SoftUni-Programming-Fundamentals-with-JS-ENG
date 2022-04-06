function decryptingCommands(arr) {
    let str = arr.shift();

    while (arr[0] != 'Finish') {
        let tokens = arr.shift().split(' ');
        let command = tokens.shift();
        let token1 = tokens.shift();

        switch (command) {
            case "Replace":
                str = str.split(token1).join(tokens[0]);
                console.log(str);
                break;
            case "Cut":
                if (str[token1] == undefined || str[tokens[0]] == undefined){
                    console.log('Invalid indices!');
                } else {
                    //potential issue with indexes
                    let substr = str.substring(Number (token1), Number (tokens[0]) + 1);
                    let modified = str.split(substr).join('');
                    str = modified;
                    console.log(str);
                }
                break;
            case "Make":
                if (token1 == 'Upper'){
                    let toUpper = str.toUpperCase();
                    str = toUpper;
                    console.log(str);
                } else {
                    let toLower = str.toLowerCase();
                    str = toLower;
                    console.log(str);
                }
                break;
            case "Check":
                if (str.includes(token1)){
                    console.log(`Message contains ${token1}`);
                } else {
                    console.log(`Message doesn't contain ${token1}`);
                }
                break;
            case "Sum":
                if (str[token1] == undefined || str[tokens[0]] == undefined){
                    console.log('Invalid indices!');
                } else {
                    let subst = str.substring(Number (token1), Number (tokens[0]) + 1);
                    console.log(subst.split('').map(a => a.charCodeAt()).reduce((a,b) => a + b));
                }
                break;
        }
    }
}
decryptingCommands(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])

console.log('--------');

decryptingCommands(["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"])