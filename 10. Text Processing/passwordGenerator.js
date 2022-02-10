function passwordGenerator(input){
    let vowels = ['a','e','i','o','u'];
    let concatenated = (input[0] + input[1]).split('');
    let replacements = input[2].split('').map(x => x.toLocaleUpperCase());
    let vowelsCounter = 0;
    for (let i = 0; i < concatenated.length; i++){
      if (vowels.includes(concatenated[i])){
        if (vowelsCounter === replacements.length){
          vowelsCounter = 0;
          concatenated[i] = replacements[vowelsCounter];
        } else {
          concatenated[i] = replacements[vowelsCounter];
        }
        vowelsCounter++;
      }
    }
    console.log(`Your generated password is ${concatenated.reverse().join('')}`)
  }

  passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ])