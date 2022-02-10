function destinationMapper(input){
    let pattern = /([\=\/])([A-Z][A-Za-z][A-Za-z]+)(\1)/g;
    let cities = [];
    // let run1 = input.match(pattern);
    // console.log(run1);
    let run2 = pattern.exec(input);
    while (run2 != null){
        cities.push(run2[2]);
        pattern.lastIndex = (pattern.lastIndex) - 1;
        run2 = pattern.exec(input);
    }
    let travelPoints = cities.join('').length;
    console.log('Destinations: ' + cities.join(', '))
    console.log('Travel Points: ' + travelPoints)
}
destinationMapper('=Hawai=/Cyprus/Myconos/=Invalid/invalid==i5valid=/I5valid/=i=')