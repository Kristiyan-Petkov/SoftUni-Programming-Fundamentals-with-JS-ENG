function rounding(number, precision) {
    if (precision > 15){
        precision = 15;
    }
    let rounded = number.toFixed(precision);
    let withoutZeros = parseFloat(rounded);
    console.log(withoutZeros);

}
rounding(3.1415926535897932384626433832795, 2)
rounding(10.5, 3)