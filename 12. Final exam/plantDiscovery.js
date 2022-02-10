function plantDiscovery(input){
    let plantsNum = input.shift();
    let plants = {};
    let ratings = {};

    for (let i = 1; i <= plantsNum; i++){
        let line = input.shift().split('<->');
        plants[line[0]] = Number (line[1]);
    }
    for (let key of Object.keys(plants)){
        ratings[key] = [];
    }
    input.pop();
    for (let element of input){
        let elementSplit = element.split(': ');
        let action = elementSplit[0];
        let plantSplit = elementSplit[1].split(' - ');
        let plant = plantSplit[0];
        let actionNum = Number (plantSplit[1]);
       
        if (Object.keys(plants).includes(plant)){
            if (action === 'Rate'){
                ratings[plant].push(actionNum);
            } else if (action === 'Update'){
                plants[plant] = actionNum;
            } else {
                ratings[plant] = [];
            }
        } else {
            console.log('error')
        }
    }
    console.log('Plants for the exhibition:');
    let finalObject = {};
    for (let [key,value] of Object.entries(plants)){
        let ratingFind = ratings[key];
        let finalRating = 0;
        if (ratingFind.length > 0){
            finalRating = (ratingFind.reduce((a,b) => a + b)) / ratingFind.length;
        }

        finalObject[key] = {Rarity: value, Rating : finalRating}
    }
    let sorted = Object.entries(finalObject).sort((a,b) => (Object.values(b[1]))[0] - (Object.values(a[1]))[0] || (Object.values(b[1]))[1] - (Object.values(a[1]))[1])
    for (let [key, value] of sorted){
        let values = Object.values(value);
        console.log(`- ${key}; Rarity: ${values[0]}; Rating: ${values[1].toFixed(2)}`);
    }
}
plantDiscovery([3,
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'])