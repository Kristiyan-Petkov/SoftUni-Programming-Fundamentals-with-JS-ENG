function netherRealms(input) {
    let demons = input.split(',');
    let trimmedDemons = input.split(',').map(a => a.trim()).sort((a, b) => a.localeCompare(b));
    let patternHealth = /[^0-9\+\-\*\/\.]/g;
    let patternDamageSum = /(-*\d+(?:\.\d+)?)/g
    let patternDamageActions = /([\*\/])/g;
    for (let element of trimmedDemons) {
        let health = element.match(patternHealth).map(a => a.charCodeAt()).reduce((a, b) => a + b);
        let damageSum = element.match(patternDamageSum);
        let damage = 0;
        if (damageSum) {
            damage = damageSum.map(Number).reduce((a, b) => a + b);
            let actions = element.match(patternDamageActions);
            for (let action of actions) {
                if (action === '*') {
                    damage *= 2;
                } else {
                    damage /= 2;
                }
            }
        }
        console.log(`${element} - ${health} health, ${damage.toFixed(2)} damage`)
    }
}
netherRealms('M3ph-0.5s-0.5t0.0**')