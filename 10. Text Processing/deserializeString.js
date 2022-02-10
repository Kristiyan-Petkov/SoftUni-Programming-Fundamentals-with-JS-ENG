function deserializeString(input){
    let finalString = [];
    
    while (input[0] !== 'end'){
      let list = input.shift().split(':');
      let char = list.shift();
      let indexes = list[0].split('/').map(Number);
      let higherIndex = Number (indexes[indexes.length -1]);
      for (let i = 0; i <= higherIndex; i++){
        if (finalString[i] === ' ' && indexes.includes(i)){
          finalString[i] = char;
        } else {
          if (finalString.length <= i && indexes.includes(i)){
            let charsToAdd = higherIndex + 1 - finalString.length;
            for (let j = 1; j < charsToAdd; j++){
              finalString.push(' ');
            }
            finalString.push(char);
          } else if (finalString.length > i && indexes.includes(i)){
            finalString[i] = char;
          }
        }
        
      }
      if (indexes[0] === 0){
        finalString[0] = char;
      }
    }
    console.log(finalString.join(''))
  }
  deserializeString(["a:0/2/4/6",
  "b:1/3/5",
  "end"])