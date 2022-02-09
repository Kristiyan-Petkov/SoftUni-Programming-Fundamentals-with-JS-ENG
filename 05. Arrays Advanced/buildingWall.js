function buildingWall(array) {
    let dailyConcrete = [];
    let sumOfHeights = array.reduce((a, b) => a + b);
    while (sumOfHeights < array.length * 30) {
        let activeCrews = 0
        for(let i = 0; i < array.length; i++){
            if (array[i] < 30) {
                activeCrews++;
                // possible issue below
                array[i] += 1;  
            }
        }
        dailyConcrete.push(activeCrews * 195);
        sumOfHeights = array.reduce((a, b) => a + b);
    }
    let totalCost = 1900 * dailyConcrete.reduce((a, b) => a + b);
    console.log(dailyConcrete.join(', '));
    console.log(totalCost + ' pesos');
}
buildingWall([21, 25, 28])