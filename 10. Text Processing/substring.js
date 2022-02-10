function substring(string, startIndex, end) {
    let newString = string.slice(startIndex, end + startIndex);
    console.log(newString)
}
substring("ASentence", 1, 8)