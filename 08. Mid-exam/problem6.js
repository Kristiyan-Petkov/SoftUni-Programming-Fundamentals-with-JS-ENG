function problem6(array){
    let neighborhood = array
        .shift()
        .split('@')
        .map(Number);

    let cupidPosition = 0;
    array.pop();
    for (let i = 0; i < array.length; i++){
        let jump = array[i].split(' ')
        let jumpLength = Number (jump[1]);
        if ((cupidPosition + jumpLength) >= neighborhood.length){
            cupidPosition = 0;
            if (neighborhood[0] === 0){
                console.log(`Place 0 already had Valentine's day.`);
            } else {
                if (neighborhood[0] > 2) {
                    neighborhood[0] -= 2;
                } else {
                    neighborhood[0] = 0;
                    console.log(`Place 0 has Valentine's day.`);
                }
            }
        } else {
            cupidPosition = cupidPosition + jumpLength;
            if (neighborhood[cupidPosition] === 0){
                console.log(`Place ${cupidPosition} already had Valentine's day.`);
            } else {
                if (neighborhood[cupidPosition] > 2) {
                    neighborhood[cupidPosition] -= 2;
                } else {
                    neighborhood[cupidPosition] = 0;
                    console.log(`Place ${cupidPosition} has Valentine's day.`);
                }
            }
        }
    }
    console.log(`Cupid's last position was ${cupidPosition}.`);
    let failedPlaces = neighborhood.filter(x => x > 0);
    if (failedPlaces.length > 0){
        console.log(`Cupid has failed ${failedPlaces.length} places.`);
    } else {
        console.log('Mission was successful.');
    }
}
problem6(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])