function storeProvision(stock, order){
    let newStock = [];
    for (let i = 0; i < stock.length - 1; i += 2){
        let product = stock[i];
        let quantity = Number (stock[i+1]);
        let newProduct = {product, quantity}
        newStock.push(newProduct)
    }
    for (let j = 0; j < order.length; j+=2){
        let product = order[j];
        let quantity = Number (order[j+1]);
        let indexOfProduct = newStock.findIndex(x => x.product === product);
        if (indexOfProduct < 0){
            let newProduct = {product, quantity}
            newStock.push(newProduct)
        } else {
            newStock[indexOfProduct].quantity += quantity;
        }
    }

    for (let products of newStock){
        console.log(`${products.product} -> ${products.quantity}`);
    }
}
    storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )