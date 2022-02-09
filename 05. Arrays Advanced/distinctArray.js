function distinctArray(array){
    let newArray = []
    for (let number of array){
        if (newArray.includes(number) === false){
            newArray.push(number)
        }
    }
    console.log(newArray.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
