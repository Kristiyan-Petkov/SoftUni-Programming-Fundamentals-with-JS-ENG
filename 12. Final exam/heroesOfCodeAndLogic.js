function heroesOfCodeAndLogic(arr) {
    let playersNum = arr.shift();
    let heroesExtract = arr.splice(0, playersNum);
    let heroes = {};
    for (let hero of heroesExtract) {
        let heroSpecs = hero.split(' ');
        let name = heroSpecs[0];
        let heroObj = {
            hp: Number(heroSpecs[1]),
            mp: Number(heroSpecs[2]),
        }
        heroes[name] = heroObj;
    }
    while (arr[0] != 'End') {
        let tokens = arr.shift().split(' - ');
        let heroName = tokens[1];
        let amount = Number (tokens[2]);
        switch (tokens[0]) {
            case "CastSpell":
                let checkMP = heroes[heroName].mp;
                if (checkMP >= amount){
                    heroes[heroName].mp -= amount;
                    console.log(`${heroName} has successfully cast ${tokens[3]} and now has ${heroes[heroName].mp} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${tokens[3]}!`);
                }
                break;
            case "TakeDamage":
                let checkHP = heroes[heroName].hp;
                let attackResult = checkHP - amount;
                if (attackResult > 0){
                    heroes[heroName].hp = attackResult;
                    console.log(`${heroName} was hit for ${amount} HP by ${tokens[3]} and now has ${attackResult} HP left!`);
                } else {
                    console.log(`${heroName} has been killed by ${tokens[3]}!`);
                    delete heroes[heroName];
                }
                break;
            case "Recharge":
                let checkMana = heroes[heroName].mp;
                let newMana = checkMana + amount;
                if (newMana <= 200){
                    heroes[heroName].mp = newMana;
                    console.log(`${heroName} recharged for ${amount} MP!`);
                } else {
                    let recharge = 200 - checkMana;
                    heroes[heroName].mp = 200;
                    console.log(`${heroName} recharged for ${recharge} MP!`);
                }
                break;
            case "Heal":
                let checkHealth = heroes[heroName].hp;
                let newHealth = checkHealth + amount;
                if (newHealth <= 100){
                    heroes[heroName].hp = newHealth;
                    console.log(`${heroName} healed for ${amount} HP!`);
                } else {
                    let recharge = 100 - checkHealth;
                    heroes[heroName].hp = 100;
                    console.log(`${heroName} healed for ${recharge} HP!`);
                }
                break;
        }
    }
    for (let winner in heroes){
        console.log(winner);
        console.log(`  HP: ${heroes[winner].hp}`);
        console.log(`  MP: ${heroes[winner].mp}`);
    }
}
heroesOfCodeAndLogic([
    4,
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])