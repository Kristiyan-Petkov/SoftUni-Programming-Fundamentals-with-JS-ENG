function heroRecruitment(arr) {
    let heroes = {};

    while (arr[0] != 'End') {
        let tokens = arr.shift().split(' ');
        let command = tokens[0];
        let hero = tokens[1];
        let spell = tokens[2];
        switch (command) {
            case "Enroll":
                if (heroes[hero]){
                    console.log(`${hero} is already enrolled.`);
                } else {
                    heroes[hero] = {
                        spells: [],
                    }
                }
                break;
            case "Learn":
                if (!heroes[hero]){
                    console.log(`${hero} doesn't exist.`);
                } else if (heroes[hero].spells.includes(spell)){
                    console.log(`${hero} has already learnt ${spell}.`);
                } else {
                    heroes[hero].spells.push(spell);
                }
                break;
            case "Unlearn":
                if (!heroes[hero]){
                    console.log(`${hero} doesn't exist.`);
                } else if (!heroes[hero].spells.includes(spell)){
                    console.log(`${hero} doesn't know ${spell}.`);
                } else {
                    let spellIndex = heroes[hero].spells.indexOf(spell)
                    heroes[hero].spells.splice(spellIndex, 1);
                }
                break;
        }
    }
    console.log('Heroes:');
    let extract = Object.entries(heroes);
    for (let [hName, hSpells] of extract){
        console.log(`== ${hName}: ${hSpells.spells.join(', ')}`);
    }
}
heroRecruitment(["Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"])
console.log('-------------------------------------------');
heroRecruitment(["Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Learn Stefan Deba",
    "Unlearn Stefan NotFound",
    "End"])
console.log('-------------------------------------------');
heroRecruitment(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"])