function houseParty(commands) {
    let guestList = [];
    for (let entry of commands) {
        let splitCommand = entry.split(' ');
        let name = splitCommand[0];
        let isInList = guestList.indexOf(name);
        let status = splitCommand[2];
        switch (status) {
            case "not":
                if (isInList < 0) {
                    console.log(`${name} is not in the list!`);
                } else {
                    guestList.splice(isInList, 1);
                }
                break;
            case "going!":
                if (isInList < 0) {
                    guestList.push(name);
                } else {
                    console.log(`${name} is already in the list!`);
                }
                break;
        }
        // console.log(guestList);
    }
    return guestList.join('\n')
    // console.log(guestList);
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)