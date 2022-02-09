function firstAndLastKNums(array){
    let k = array.shift();
    let left = array.slice(0, k);
    let right = array.slice(array.length - k);
        
    console.log(left.join(' '));
    console.log(right.join(' '));
}
firstAndLastKNums([3,
    6, 7, 8, 9]
     
    )