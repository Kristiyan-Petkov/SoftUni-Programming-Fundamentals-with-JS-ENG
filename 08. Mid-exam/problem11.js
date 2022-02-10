function problem11(input) {
    let health = 100;
    let bitcoins = 0;
    let rooms = input.split('|');
    let roomCounter = 0;
    for (let room of rooms) {
        roomCounter++;
        let commandSplit = room.split(' ')
        let command = commandSplit[0];
        let value = Number (commandSplit[1]);
        switch (command) {
            case "potion":
                if (health + value >= 100){
                    let initialHealth = health;
                    health = 100;
                    console.log(`You healed for ${100 - initialHealth} hp.`);
                } else {
                    health += value;
                    console.log(`You healed for ${value} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                if (health > value){
                    console.log(`You slayed ${command}.`);
                    health -= value
                } else {
                    console.log(`You died! Killed by ${command}.\nBest room: ${roomCounter}`);
                    return;
                }
        }
    }
    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
}
problem11("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")