function makeDictionary(array){
    let dictionary = [];
    for (let element of array){
        let transform = JSON.parse(element);
        let [termTransform, definitionTransform]  = Object.entries(transform);
        let returnTerm = dictionary.find(x => x.term === termTransform[0]);
        if (returnTerm){
            returnTerm.definition = termTransform[1];
        } else {
            let object = {
                term: termTransform[0],
                definition: termTransform[1]
            }
            dictionary.push(object)
        }
    }
    dictionary.sort((a, b) => a.term.localeCompare(b.term));
    for (let i = 0; i < dictionary.length; i++){
        console.log(`Term: ${dictionary[i].term} => Definition: ${dictionary[i].definition}`);
    }
}
makeDictionary([
    '{"Coffee":"A hot drinkoasteof a tropical shrub."}',
    '{"Bus":"A large motlly one serving the r a fare."}',
    '{"Boiler":"A fuel-burnting water."}',
    '{"TapeB":"A narrow strip ofsed to hold or fasten something."}',
    '{"TapeB":"A something."}',
    '{"Boiler":"A something."}',
    '{"Microphone":"An instund which may td, transmitted, or recorded."}'
    ])