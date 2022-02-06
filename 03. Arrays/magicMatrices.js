function magicMatrices (array){
    let magicMatrix = true;
    let array1 = array[0];
    let array2 = array[1];
    let array3 = array[2];
    let sum1horizontal = 0;
    let sum2horizontal = 0;
    let sum3horizontal = 0;
    sum1horizontal = array1.reduce(add, 0);
        function add(accumulator, a) {
        return accumulator + a;
        }
    sum2horizontal = array2.reduce(add, 0);
        function add(accumulator, a) {
        return accumulator + a;
        }
    sum3horizontal = array3.reduce(add, 0);
        function add(accumulator, a) {
        return accumulator + a;
        }
    // let sum1horizontal = array1[0] + array1[1] + array1[2];
    // let sum2horizontal = array2[0] + array2[1] + array2[2];
    // let sum3horizontal = array3[0] + array3[1] + array3[2];
    let sum1vertical = array1[0] + array2[0] + array3[0];
    let sum2vertical = array1[1] + array2[1] + array3[1];
    let sum3vertical = array1[2] + array2[2] + array3[2];
    if (sum1horizontal !== sum2horizontal || sum2horizontal !== sum3horizontal){
        magicMatrix = false;
        console.log(magicMatrix);
        return;
    } else if (sum1vertical !== sum2vertical || sum2vertical !== sum3vertical){
        magicMatrix = false;
        console.log(magicMatrix);
        return;
    } 
    else if (sum1horizontal !== sum1vertical){
        magicMatrix = false;
        console.log(magicMatrix);
        return;
    }

    console.log(magicMatrix);
    // console.log(sum1horizontal);
    // console.log(sum2horizontal);
    // console.log(sum3horizontal);
}
magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])