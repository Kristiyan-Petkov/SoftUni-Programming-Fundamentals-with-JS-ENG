function sumOfOddNumbers (nums){
    sum = 0;

    for (i = 1; i <= nums*2; i+=2){
        console.log(i);
        sum+=i
    }
    console.log(`Sum: ${sum}`);

}
sumOfOddNumbers(5)