function problem15(arr) {
    let neighborhood = arr
        .shift()
        .split('@');
    
    let cupudPosition = 0;
    while (arr[0] != 'Love!'){
        let tokens = arr
            .shift()
            .split(' ')
            .map(Number);
        let jump = tokens[1];
        if (cupudPosition + jump > neighborhood.length - 1){
            cupudPosition = 0;
        } else {
            cupudPosition = cupudPosition + jump;
        }
        if (neighborhood[cupudPosition] == 0){
            console.log(`Place ${cupudPosition} already had Valentine's day.`);
        } else if (neighborhood[cupudPosition] == 2){
            console.log(`Place ${cupudPosition} has Valentine's day.`);
            neighborhood[cupudPosition] = 0;
        } else if (neighborhood[cupudPosition] > 2){
            neighborhood[cupudPosition] -= 2;
        }
    }
    console.log(`Cupid's last position was ${cupudPosition}.`);
    let failed = neighborhood.filter(a => a > 0);
    if (failed.length == 0){
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${failed.length} places.`);
    }
}
problem15(([
    "2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]))