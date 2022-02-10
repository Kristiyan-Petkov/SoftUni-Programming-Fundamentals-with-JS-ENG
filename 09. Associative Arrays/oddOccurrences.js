function oddOccurrences(input){
    let splitInput = input.split(' ');
    let arr = {}
    for (let element of splitInput){
        let lowerCase = element.toLowerCase();
        if (!Object.keys(arr).includes(lowerCase)){
            arr[lowerCase] = 0;
        }
        arr[lowerCase]++;
    }
    let result = [];
    for (let [key,value] of Object.entries(arr)){
        if (value % 2 !== 0){
            result.push(key);
        }
    }
    console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')