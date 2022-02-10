function starEnigma(input) {
    let messagesNum = Number(input.shift());
    let attacked = [];
    let destroyed = [];
    let patternStar = /[STARstar]/g;
    let patternAll = /@([A-Za-z]+).*:(\d+).*!([AD])!.*->(\d+)/g;

    for (let encription of input) {
        let starCount = encription.match(patternStar).length;
        let decription = [];
        for (let char of encription) {
            let newChar = String.fromCharCode(char.charCodeAt() - starCount);
            decription.push(newChar);
        }
        let decripted = decription.join('');
        let match = patternAll.exec(decripted);

        if (match != null) {
            if (match[3] === "A") {
                attacked.push(match[1]);
            } else {
                destroyed.push(match[1]);
            }
        }
        patternAll = /@([A-Za-z]+).*?:(\d+).*?!([AD])!.*?->(\d+)/g;
    }
    console.log(`Attacked planets: ${attacked.length}`);
    let sortedAttacked = attacked.sort((a, b) => a.localeCompare(b));
    for (let item of sortedAttacked) {
        console.log(`-> ${item}`)
    }

    console.log(`Destroyed planets: ${destroyed.length}`);
    let sortedDestroyed = destroyed.sort((a, b) => a.localeCompare(b));

    for (let items of sortedDestroyed) {
        console.log(`-> ${items}`)
    }
}
starEnigma(["3", "tt(''DGsvywgerx>6444444444%H%1B9444",
    "GQhrr|A977777(H(TTTT", "EHfsytsnhf?8555&I&2C9555SR"])
console.log('----------------')
starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"])