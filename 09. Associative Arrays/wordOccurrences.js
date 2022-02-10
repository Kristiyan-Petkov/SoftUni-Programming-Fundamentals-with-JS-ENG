function wordOccurrences (input){
    let map = new Map();

    for(let element of input){
        let name = element;
        if (!map.has(name)){
            map.set(name, 1)
        } else {
            map.set(name,map.get(name) + 1)
        }
    }
    let sorted = Array.from(map).sort((a,b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])