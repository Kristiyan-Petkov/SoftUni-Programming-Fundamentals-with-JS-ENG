function tseamAccount(array) {
    let newArray = array[0].split(' ');
    let index = 1
    let command = array[index];

    while (command !== "Play!") {
        let commandSplit = command.split(" ");
        let commandCore = commandSplit[0];
        let commandGame = commandSplit[1];
        switch (commandCore) {
            case "Install":
                newArray.push(commandGame);
                break;
            case "Uninstall":
                let gameIndex1 = newArray.indexOf(commandGame);
                newArray.splice(gameIndex1, 1);
                // for (let i = 0; i < newArray.length; i++){ 
                //     if (newArray[i] === commandGame) { 
                //         newArray.splice(i, 1); 
                //         i--; 
                //     }
                // }
                break;
            case "Update":
                let gameIndex = newArray.indexOf(commandGame);
                if (gameIndex >= 0){
                    newArray.push(newArray[gameIndex]);
                    for (let j = 0; j < newArray.length; j++){ 
                        if (newArray[j] === commandGame) { 
                            newArray.splice(j, 1); 
                            j--;
                            break;
                        }
                    }
                }
                break;
            case "Expansion":
                let expansionSplit = commandGame.split("-");
                let game = expansionSplit[0];
                let expansion = `${game}:${expansionSplit[1]}`;
                let originalGameIndex = newArray.indexOf(game);
                if (originalGameIndex >= 0){
                    newArray.splice(originalGameIndex + 1, 0, expansion);
                }
                break;
        }
        index++;
        command = array[index];
        
    }
    console.log(newArray.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])