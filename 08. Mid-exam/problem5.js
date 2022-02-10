function problem5(array) {
    let groceriesList = array.shift().split('!');
    let index = 0;
    let currentCommand = array[index];
    while (currentCommand !== "Go Shopping!") {
        let commandSplit = currentCommand.split(' ');
        let command = commandSplit.shift();
        let itemConcerned = commandSplit.shift();
        switch (command) {
            case "Urgent":
                if (groceriesList.indexOf(itemConcerned) < 0){
                    groceriesList.unshift(itemConcerned);
                }
                break;
            case "Unnecessary":
                if (groceriesList.indexOf(itemConcerned) >= 0){
                    groceriesList.splice(groceriesList.indexOf(itemConcerned),1);
                }
                break;
            case "Correct":
                let newItem = commandSplit[0];
                if (groceriesList.indexOf(itemConcerned) >= 0){
                    groceriesList[groceriesList.indexOf(itemConcerned)] = newItem;
                }
                break;
            case "Rearrange":
                if (groceriesList.indexOf(itemConcerned) >= 0){
                    let itemToRearrange = groceriesList.splice(groceriesList.indexOf(itemConcerned),1);
                    groceriesList.push(itemToRearrange)
                }
                break;
        }
        index++;
        currentCommand = array[index];
    }
    console.log(groceriesList.join(', '));
}
problem5(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])