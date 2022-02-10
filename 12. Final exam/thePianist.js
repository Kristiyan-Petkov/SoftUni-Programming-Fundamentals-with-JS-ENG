function thePianist(input) {
    let initialPiecesNum = Number(input.shift());
    let pianoPieces = {};
    for (let i = 1; i <= initialPiecesNum; i++) {
        let line = input.shift().split('|');
        let piece = line[0];
        let composer = line[1];
        let key = line[2];
        pianoPieces[piece] = {
            composer: composer,
            key: key,
        }
    }
    while (input[0] !== 'Stop') {
        let instructionLine = input.shift().split('|');
        let action = instructionLine[0];
        switch (action) {
            case 'Add':
                if (!pianoPieces[instructionLine[1]]){
                    pianoPieces[instructionLine[1]] = {
                        composer: instructionLine[2],
                        key: instructionLine[3],
                    }
                    console.log(`${instructionLine[1]} by ${instructionLine[2]} in ${instructionLine[3]} added to the collection!`);
                } else {
                    console.log(`${instructionLine[1]} is already in the collection!`);
                }
                break;
            case 'Remove':
                if (!pianoPieces[instructionLine[1]]){
                    console.log(`Invalid operation! ${instructionLine[1]} does not exist in the collection.`);
                } else {
                    delete pianoPieces[instructionLine[1]];
                    console.log(`Successfully removed ${instructionLine[1]}!`);
                }
                break;
            case 'ChangeKey':
                if (!pianoPieces[instructionLine[1]]){
                    console.log(`Invalid operation! ${instructionLine[1]} does not exist in the collection.`);
                } else {
                    pianoPieces[instructionLine[1]].key = instructionLine[2];
                    console.log(`Changed the key of ${instructionLine[1]} to ${instructionLine[2]}!`);
                }
                break;
        }
    }
    // let sorted = Object.entries(pianoPieces).sort((a,b) => a[0][0].localeCompare(b[0][0]));
    // //  || (Object.values(sorted[a][1])[0]).localeCompare(Object.values(sorted[b][1])[0]));

    let sorted = Object.entries(pianoPieces).sort((a,b) => {
        let nameA = a[0];
        let nameB = b[0];

        let composerA = a[1].composer;
        let composerB = b[1].composer;

        return nameA.localeCompare(nameB) || composerA.localeCompare(composerB);
    });
    for (let [key,value] of sorted){
        let valueSplit = Object.values(value);
        console.log(`${key} -> Composer: ${valueSplit[0]}, Key: ${valueSplit[1]}`)
    }
}
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ])