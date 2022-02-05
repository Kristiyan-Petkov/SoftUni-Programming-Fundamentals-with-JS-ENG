function sortNumbers(a, b, c) {
    let highest = 0;
    let middle = 0;
    let lowest = 0;

    if (a > b && a > c) {
        highest += a;
        if (b > c) {
            middle += b;
            lowest += c;
        } else {
            middle += c;
            lowest += b;
        }
    } else if (b > a && b > c) {
        highest += b;
        if (a > c) {
            middle += a;
            lowest += c;
        } else {
            middle += c;
            lowest += a;
        }
    } else if (c > a && c > b) {
        highest += c;
        if (a > b) {
            middle += a;
            lowest += b;
        } else {
            middle += b;
            lowest += a;
        }
    }
    console.log(highest);
    console.log(middle);
    console.log(lowest);
}
// sortNumbers(2, 1, 3)
sortNumbers(-2,1,3)
// sortNumbers(0,0,2)