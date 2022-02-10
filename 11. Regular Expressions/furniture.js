function furniture(input) {
    let pattern = /^>>(\w+)<<(\d+\.*\d*)!(\d+)\b/g;
    let items = [];

    while (input[0] !== "Purchase") {
        let item = input.shift();
        let itemDetails = pattern.exec(item);
        if (itemDetails !== null) {
            let itemName = itemDetails[1];
            let itemPrice = Number(itemDetails[2]);
            let itemUnits = Number(itemDetails[3]);
            items.push(itemName + '->' + itemPrice * itemUnits);
        }
        pattern = /^>>(\w+)<<(\d+\.*\d*)!(\d+)\b/g;

    }

    let totalPurchase = 0;
    console.log('Bought furniture:');
    for (let furniture of items) {
        let furnitureSplit = furniture.split('->');
        console.log(furnitureSplit[0]);
        totalPurchase += Number(furnitureSplit[1])
    }
    console.log('Total money spend: ' + totalPurchase.toFixed(2));

}
furniture([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"])