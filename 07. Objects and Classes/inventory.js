function inventory(array){
    let heros = [];
    for (let element of array){
        let elementSplit = element.split(' / ');
        let alphabeticalItemsOrder = elementSplit[2].split(', ');
        // .sort((a, b) => a.localeCompare(b));
        // console.log(elementSplit)
        let hero = {
            name: elementSplit[0],
            rank: Number (elementSplit[1]),
            items: alphabeticalItemsOrder.join(', ')
        }
        heros.push(hero);
    }
    let ranked = heros.sort((a,b) => a.rank - b.rank);
    // console.log(ranked)
    
    for (let hero of ranked){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.rank}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
   " Batman / 2 / Banana, Gun",
    "Superman / 18 / Sword",
    "Poppy / 28 / Sentinel, Antara"
    ])
console.log('----------');
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ])