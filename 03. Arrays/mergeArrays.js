function mergeArrays (arr1, arr2){
    let arr3 = [];
    // let toPrint = ``;
    for (let i = 0; i < arr1.length; i++){
        if (i % 2 === 0){
            let element1 = Number (arr1[i]);
            let element2 = Number (arr2[i]);
            arr3.push(element1 + element2);
            // if (i === arr1.length - 1){
            //     toPrint += `${element1 + element2}`
            // } else {
            //     toPrint += `${element1 + element2} - `
            // }
        } else {
            let element1 = arr1[i];
            let element2 = arr2[i];
            arr3.push(element1 + element2);
            // if (i === arr1.length - 1){
            //     toPrint += `${"" + element1 + element2}`
            // } else {
            //     toPrint += `${"" + element1 + element2} - `
            // }
        }
    }
    console.log(arr3.join(' - '));

}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)