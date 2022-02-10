function censoredWords(text, word){
    let stringSplit = text.split(' ');
    let replacement = '';
    for (let character of word){
      replacement += '*'
    }
    let censored = text.replace(word, replacement);
    while (censored.includes(word)){
      censored = censored.replace(word, replacement);
    }
    console.log(censored)
  }
  censoredWords("A small sentence with some words", "small")