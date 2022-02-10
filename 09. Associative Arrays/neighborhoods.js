function neighborhoods(input){
    let neighborhoods = input.shift().split(', ');
    let map = new Map();
    for(let hood of neighborhoods){
        map.set(hood, []);
    }
    for (let people of input){
        let tokens = people.split(' - ');
        let hood = tokens[0];
        let person = tokens[1];
        if (map.has(hood)){
            map.get(hood).push(person)
        }
    }
    let sorted = Array.from(map).sort((a,b) => b[1].length - a[1].length)
    for (let [key, value] of sorted){
        console.log(`${key}: ${value.length}`);
        for (let elements of value){
            console.log(`--${elements}`);
        }
    }
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy'])