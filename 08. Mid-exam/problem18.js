function phoneShop(input) {
    let storage = input
        .shift()
        .split(', ')

    while (input[0] != 'End') {
        let [command, detail] = input
            .shift()
            .split(' - ')

        switch (command) {
            case 'Add':
                if (!storage.includes(detail)){
                    storage.push(detail);
                }
                break;
            case 'Remove':
                if (storage.includes(detail)){
                    let itemIndex = storage.indexOf(detail);
                    storage.splice(itemIndex, 1);
                }
                break;
            case 'Bonus phone':
                let [oldPhone, newPhone] = detail.split(':')
                if (storage.includes(oldPhone)){
                    let itemIndex = storage.indexOf(oldPhone);
                    storage.splice(itemIndex + 1, 0, newPhone);
                }
                break;
            case 'Last':
                if (storage.includes(detail)){
                    let itemIndex = storage.indexOf(detail);
                    storage.splice(itemIndex, 1);
                    storage.push(detail)
                }
                break;
        }
    }
    console.log(storage.join(', '));
}
phoneShop(["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"])