function problem12(input) {
    let inventory = input.shift().split(', ');
    for (let element of input) {
        let commandSplit = element.split(' - ');
        let command = commandSplit[0];
        let item = commandSplit[1];
        switch (command) {
            case "Collect":
                if (inventory.indexOf(item) < 0) {
                    inventory.push(item);
                }
                break;
            case "Drop":
                if (inventory.indexOf(item) >= 0) {
                    inventory.splice(inventory.indexOf(item), 1);
                }
                break;
            case "Combine Items":
                let itemSplit = item.split(':');
                let oldItemIndex = inventory.indexOf(itemSplit[0]);
                if (oldItemIndex >= 0) {
                    inventory.splice(oldItemIndex + 1, 0, itemSplit[1]);
                }
                break;
            case "Renew":
                if (inventory.indexOf(item) >= 0) {
                    inventory.splice(inventory.indexOf(item), 1);
                    inventory.push(item);
                }
                break;
        }
    }
    console.log(inventory.join(', '));
}
problem12([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])