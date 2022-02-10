function addressBook (input){
    let addresses = [];
    for (let element of input){
        let elementSplit = element.split(':');
        let isAlreadyPresent = addresses.find(o => o.name === elementSplit[0]);
        if (isAlreadyPresent === undefined){
            let newEntry = {
                name: elementSplit[0],
                address: elementSplit[1],
            }
            addresses.push(newEntry)
        } else {
            let objectIndex = addresses.findIndex(obj => obj.name === elementSplit[0]);
            addresses[objectIndex].address = elementSplit[1];
        }
    }
    let result = addresses.sort((a,b) => a.name.localeCompare(b.name))
    for (let entries of result){
        console.log(`${entries.name} -> ${entries.address}`);
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])