function extractFile (url){
    let urlEnd = [];
    for (let i = url.length - 1; i >= 0; i--){
      let currentChar = url[i];
      if (currentChar.charCodeAt(0) === 92){
        break;
      } else {
        urlEnd.push(currentChar);
      }
    }
  
    let file = urlEnd.reverse().join('').split('.');
    let fileExtention = file.pop();
    let fileName = file.join('.');
    
    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${fileExtention}`)
  }
  extractFile ('C:\\Internal\\training-internal\\Template.pptx')