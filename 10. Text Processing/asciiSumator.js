function asciiSumator(input){
    let start;
    let end;
    if (input[0].charCodeAt() < input[1].charCodeAt()){
      start = input[0].charCodeAt();
      end = input[1].charCodeAt();
    } else {
      start = input[1].charCodeAt();
      end = input[0].charCodeAt();
    }
    let result = 0;
    for (let char of input[2]){
      if (char.charCodeAt() > start && char.charCodeAt() < end){
        result += char.charCodeAt();
      }
    }
    console.log(result)
  }
  asciiSumator(["?",
  "E",
  "@ABCEF"]
  )