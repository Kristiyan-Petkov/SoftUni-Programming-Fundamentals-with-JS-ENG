function softUniBarIncome(input) {
    let results = {};
    let totalIncome = 0;

    while (input[0] !== "end of shift") {
        let text = input.shift();
        let patternName = /%([A-Z][a-z]+)%/g;
        let patternProduct = /<(\w+)>/g;
        let patternQuantity = /\|(\d+)\|/g;
        let patternPrice = /(\d+(\.\d+)?)\$/g;
        let name = patternName.exec(text);
        let product = patternProduct.exec(text);
        let quantity = patternQuantity.exec(text);
        let costPerUnit = patternPrice.exec(text);
        if (name !== null && product !== null && quantity !== null && costPerUnit !== null) {
            let price = Number(quantity[1]) * Number(costPerUnit[1]);
            totalIncome += price;
            console.log(`${name[1]}: ${product[1]} - ${price.toFixed(2)}`)
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}
softUniBarIncome(["%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift"]
)