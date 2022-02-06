function dungeonestDark(input) {
    let health = 100;
    let coins = 0;
    let toSplit = input[0];
    let split = toSplit.split("|")
    for (i = 0; i < split.length; i++) {
        let currentRoom = split[i];
        let splitRoom = currentRoom.split(" ");
        let roomEvent = splitRoom[0];
        let roomValue = Number(splitRoom[1]);
        switch (roomEvent) {
            case "potion":
                if (health + roomValue > 100) {
                    let heal = 100 - health;
                    health += heal;
                    console.log(`You healed for ${heal} hp.`);
                    console.log(`Current health: ${health} hp.`);
                } else {
                    let heal = roomValue;
                    health += heal;
                    console.log(`You healed for ${heal} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
                break;
            case "chest":
                coins += roomValue;
                console.log(`You found ${roomValue} coins.`);
                break;
            default:
                if(roomValue < health){
                    health -= roomValue;
                    console.log(`You slayed ${roomEvent}.`);
                } else {
                    console.log(`You died! Killed by ${roomEvent}.`);
                    console.log(`Best room: ${i+1}`);
                    return;
                }

        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])