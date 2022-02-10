function storage(input) {
    let storageRoom = new Map();

    for (let string of input) {
        let tokens = string.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if (!storageRoom.has(product)) {
            storageRoom.set(product, quantity);
        } else {
            let currentQuantity = storageRoom.get(product);
            let newQuantity = currentQuantity + quantity;
            storageRoom.set(product, newQuantity);
        }
    }
    for (let [product, quantity] of storageRoom) {
        console.log(product + ' -> ' + quantity);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])