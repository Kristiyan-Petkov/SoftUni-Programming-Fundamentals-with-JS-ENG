function gladiatorInventory(array) {
    let inventory = array.shift().split(' ');
    for (let elements of array) {
        let elementSplit = elements.split(' ');
        let attribute = elementSplit[1];
        switch (elementSplit[0]) {
            case "Buy":
                if (inventory.indexOf(attribute) < 0) {
                    inventory.push(attribute);
                }
                break;
            case "Trash":
                if (inventory.indexOf(attribute) >= 0) {
                    inventory.splice(inventory.indexOf(attribute), 1);
                }
                break;
            case "Repair":
                if (inventory.indexOf(attribute) >= 0) {
                    inventory.splice(inventory.indexOf(attribute), 1);
                    inventory.push(attribute);
                }
                break;
            case "Upgrade":
                let attributeSplit = attribute.split('-');
                let parentTool = attributeSplit[0];
                if (inventory.indexOf(parentTool) >= 0){
                    inventory.splice(inventory.indexOf(parentTool) + 1, 0, attributeSplit.join(':'))
                }
                break;
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])