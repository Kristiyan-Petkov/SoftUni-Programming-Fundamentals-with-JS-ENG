function searchForNumber(array, actions){
    let newArray = array.slice(0,actions[0]);
    newArray.splice(0,actions[1]);
    let targetCounter = 0;
    let target = newArray.indexOf(actions[2]);
    while (target >= 0){
        targetCounter++;
        newArray.splice(target,1);
        target = newArray.indexOf(actions[2]);
    }
    
    console.log(`Number ${actions[2]} occurs ${targetCounter} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])