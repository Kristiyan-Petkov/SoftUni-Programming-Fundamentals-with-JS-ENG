function towns(array){
    for (let element of array){
        let townArray = element.split(' | ');
        let name = {town: townArray[0], latitude: Number (townArray[1]).toFixed(2), longitude: Number (townArray[2]).toFixed(2)};
        console.log(name);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])