function matchDates(input) {
    let pattern = /\b(?<day>\d{2})([-\/\.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    while ((validName = pattern.exec(input)) !== null) {
        console.log(`Day: ${validName[1]}, Month: ${validName[3]}, Year: ${validName[4]}`);
    }
}
matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")