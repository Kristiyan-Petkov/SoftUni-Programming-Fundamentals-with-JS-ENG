function city(object){
    let keysArray = ['name', 'area', 'population', 'country', 'postCode'];
    for (let key of keysArray){
        console.log(`${key} -> ${object[key]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)