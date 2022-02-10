function lettersChangeNumbers(input){
    let inputSplit = input.split(' ');
    let cleanElements = [];
    for (let element of inputSplit){
      if (element.length > 0){
        cleanElements.push(element)
      }
    }
    let finalNumber = 0;
    for (let position of cleanElements){
      let positionSplit = position.split('');
      let firstChar = positionSplit.shift();
      let lastChar = positionSplit.pop();
      let midNumber = positionSplit.map(Number).join('');
      let firstCharNum = firstChar.toLocaleLowerCase().charCodeAt() - 96;
      let lastCharNum = lastChar.toLocaleLowerCase().charCodeAt() - 96;
      let result = 0;
      if (firstChar.toLocaleLowerCase() === firstChar){
        result = firstCharNum * midNumber;
      } else {
        result = midNumber / firstCharNum;
      }
      if (lastChar.toLocaleLowerCase() === lastChar){
        result = result + lastCharNum;
      } else {
        result = result - lastCharNum;
      }
      finalNumber += result;
    }
    console.log(finalNumber.toFixed(2))
  }
  lettersChangeNumbers('P34562Z q2576f   H456z')