function adAstra(input){
    let inputList = input.shift();
    let pattern = /([\#\|])([a-zA-Z ]+)(\1)([0-9]{2}\/[0-9]{2}\/[0-9]{2})(\1)([0-9]+)(\1)/g;
    let result = [];
    let caloriesTotal = 0;
    while ((validEntry = pattern.exec(inputList)) !== null){
        caloriesTotal += Number (validEntry[6]);
        result.push(`Item: ${validEntry[2]}, Best before: ${validEntry[4]}, Nutrition: ${validEntry[6]}`);
    }
    console.log(`You have food to last you for: ${(Math.floor(caloriesTotal/2000)).toFixed(0)} days!`);

    for (let line of result){
        console.log(line)
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ])