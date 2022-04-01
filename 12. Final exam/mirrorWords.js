function mirrorWords(arr){
    let str = arr[0];
    let pattern = /([\@\#])([a-zA-Z]{3,})\1\1([a-zA-Z]{3,})\1/g
    let match = Array.from(str.matchAll(pattern));
    if (match.length == 0){
        console.log('No word pairs found!');
        console.log('No mirror words!');
        return;
    } else {
        console.log(`${match.length} word pairs found!`);
        let mirrorWords = [];
        for (let pair of match){
            let wordOneReversed = pair[2]
                .split('')
                .reverse()
                .join('');
            if (wordOneReversed == pair[3]){
                mirrorWords.push(`${pair[2]} <=> ${pair[3]}`);
            }
        }
        if (mirrorWords.length > 0){
            console.log('The mirror words are:');
            console.log(mirrorWords.join(', '));
        } else {
            console.log('No mirror words!');
        }
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ])