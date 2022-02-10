function problem7(array){
    let students = Number (array.pop());
    let helpdeskCapacity = array.map(Number).reduce((a,b) => a + b);
    let time = Math.ceil(students / helpdeskCapacity);
    let breaksBase = time
    while (breaksBase > 3){
        time += 1;
        breaksBase -=3;
    }
    console.log(`Time needed: ${time}h.`);
}
problem7(['1','1','1','12'])