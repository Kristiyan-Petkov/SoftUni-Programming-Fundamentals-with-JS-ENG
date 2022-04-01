function passwordReset(arr) {
    let str = arr.shift();
    while (arr[0] != 'Done') {
        let tokens = arr.shift().split(' ');
        let command = tokens.shift();
        switch (command) {
            case "TakeOdd":
                let takeOdd = str.split('').filter((a,b) => b % 2 != 0);
                str =  takeOdd.join('');
                console.log(str);
                break;
            case "Cut":
                let cut = str.split('').splice(Number (tokens[0]), Number (tokens[1]));
                let part1 = str.split('').splice(0, Number (tokens[0]))
                let part2 = str.split('').splice(Number (tokens[0]) + Number (tokens[1]));
                str = part1.join('') + part2.join('');
                console.log(str);
                break;
            case "Substitute":
                let substitute = str.split(tokens[0]);
                if (substitute.length > 1){
                    str = substitute.join(tokens[1]);
                    console.log(str);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
        }
    }
    console.log(`Your password is: ${str}`);
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
console.log('---------------------------------------------');
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])