function sortArrayByTwoCriteria(array) {
    array.sort((a, b) => a.localeCompare(b));
    array.sort((x, y) => x.length - y.length);
    for (let element of array){
        console.log(element);
    }
}
sortArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])