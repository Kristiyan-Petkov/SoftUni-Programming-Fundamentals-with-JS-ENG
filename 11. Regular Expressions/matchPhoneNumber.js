function matchPhoneNumber(input) {
    let pattern = /[+]359([ -])2\1(?<number>\d{3}[ -]\d{4})\b/g;
    let result = [];
    while ((validName = pattern.exec(input)) !== null) {
        result.push(validName[0])
    }
    console.log(result.join(', '))
}
matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")