function problem13 (arr){
    let students = Number (arr.pop());
    let capacityPerHour = arr.map(Number).reduce((a,b) => a + b);
    let time = Math.ceil(students / capacityPerHour);
    let breaksBase = time
    while (breaksBase > 3){
        time += 1;
        breaksBase -=3;
    }
    console.log(`Time needed: ${time}h.`)
}
problem13(['1','2','3','45'])