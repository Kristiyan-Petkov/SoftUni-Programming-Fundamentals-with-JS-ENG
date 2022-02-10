function phoneBook (array){
    let phoneBook = [];
    for (let contacts of array){
        let inputSplit = contacts.split(' ');
        let alreadyListed = phoneBook.find(o => o.name === inputSplit[0]);
        if (alreadyListed){
            for (let elements of phoneBook){
                for (let key in elements){
                    if(elements[key] === alreadyListed.name){
                        elements.phone = inputSplit[1];
                    }
                }
            }
        } else {
            let object = {
                name: inputSplit[0],
                phone: inputSplit[1]
            }
            phoneBook.push(object);
        }
    }
    for (let elements of phoneBook){
        console.log(`${elements.name} -> ${elements.phone}`);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 09999999'])