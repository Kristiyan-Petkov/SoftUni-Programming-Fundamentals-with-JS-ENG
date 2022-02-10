function valueOfString(input){
    let result = 0;
    if (input[1] === 'LOWERCASE'){
      for (let char of input[0]){
      if (char.charCodeAt() > 96 && char.charCodeAt() < 123){
        result += char.charCodeAt()
        }
      }
    } else {
      for (let char of input[0]){
      if (char.charCodeAt() > 64 && char.charCodeAt() < 91){
        result += char.charCodeAt()
        }
      }
    }
    
    console.log(`The total sum is: ${result}`)
  }
  valueOfString(["HelloFromMyAwesomePROGRAM",
  "LOWERCASE"])