function classStorage(){
    class Storage {
        constructor (capacity){
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = function(storage){
                let sum = 0;
                for (let object of storage){
                    sum += object.price * object.quantity;
                }
                return sum;
            };
            this.addProduct = function (product){
                storage.push(product)
            }
            this.getProducts = function (){
                for (let products of storage){
                    console.log(products);
                }
            }
        }
    }

    let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
    let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
    let productThree = {name: 'Bread', price: 1.10, quantity: 8};
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    storage.getProducts();
    console.log(storage.capacity);
    console.log(storage.totalCost);

}
classStorage()
