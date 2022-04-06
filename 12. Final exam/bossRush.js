function bossRush(arr){
    arr.shift();
    let pattern = /\|([A-Z]{4,})\|\:\#([a-zA-Z]+ [a-zA-Z]+)\#/g;
    for (let boss of arr){
        let match = Array.from(boss.matchAll(pattern))[0];
        if (!match){
            console.log('Access denied!');
        } else {
            console.log(`${match[1]}, The ${match[2]}
            >> Strength: ${match[1].length}
            >> Armor: ${match[2].length}`);
        }
    }

}
bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])
console.log('-----------------------');
bossRush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])