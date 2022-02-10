function cutAndReverse(text){
    let reversedText = text
      .split('')
      .reverse()
      // .join('');
    let firstHalf = '';
    let secondHalf = '';
    firstHalf = reversedText.slice(0, reversedText.length/2);
    secondHalf = reversedText.slice(reversedText.length/2);
    console.log(secondHalf.join(''));
    console.log(firstHalf.join(''));
  }
  cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')