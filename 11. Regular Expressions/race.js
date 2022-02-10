function race(input) {
    let participants = input.shift().split(', ');
    let results = {};
    while (input[0] !== "end of race") {
        let text = input.shift();
        let patternName = /[A-Za-z]/g;
        let name = text.match(patternName).join('');
        if (participants.includes(name)) {
            let patternDigits = /\d/g;
            let distance = text.match(patternDigits).map(Number).reduce((a, b) => a + b);
            if (Object.keys(results).includes(name)) {
                results[name] += distance;
            } else {
                results[name] = distance;
            }
        }
    }
    let sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]);
    console.log('1st place: ' + sortedResults[0][0]);
    console.log('2nd place: ' + sortedResults[1][0]);
    console.log('3rd place: ' + sortedResults[2][0]);
}
race(["George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"]
)