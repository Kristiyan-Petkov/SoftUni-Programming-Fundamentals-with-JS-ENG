function reverseString (string){
    let stringAsList = string.split('');
    let stringAsListReversed = stringAsList.reverse();
    let inversedString = stringAsListReversed.join('')
    console.log(inversedString);

}
reverseString('Hello')