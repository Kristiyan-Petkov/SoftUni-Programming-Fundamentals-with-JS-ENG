function printAndSum(startNum, endNum){
    let sum = 0;
    let nums = ``;
    for(i = startNum; i <= endNum; i++){
        nums+= `${i} `;
        sum+= i;
    }
    console.log(nums);
    console.log(`Sum: ${sum}`);


}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
