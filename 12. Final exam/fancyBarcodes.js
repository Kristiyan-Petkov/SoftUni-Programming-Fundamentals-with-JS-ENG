function fancyBarcodes(arr){
    arr.shift();
    let pattern = /\@\#+([A-Z][a-zA-Z0-9]{4,}[A-Z])\@\#+/g;
    for (let barcode of arr){
        let match = barcode.matchAll(pattern);
        let matchArr = Array.from(match);
        if (matchArr.length > 0){
            let code = matchArr[0][1];
            let productGroup = code.split('').filter(a => Number(a) >= 0);
            if (productGroup.length == 0){
                console.log('Product group: 00');
            } else {
                console.log(`Product group: ${productGroup.join('')}`);
            }
            
        } else {
            console.log('Invalid barcode');
        }
    }
}
fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])

console.log('-------------------');

fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])