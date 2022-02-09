function firstAndLastKNums(array){
    let left = array.slice(1,array[0]);
    let right = array.slice(array[0]);
    console.log(left);
    console.log(right);
}
firstAndLastKNums([2, 
    7, 8, 9])