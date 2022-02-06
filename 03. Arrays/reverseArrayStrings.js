function reverseArrayStrings(input) {
    for (let i = 0; i < input.length / 2; i++) {
        let currentContainer = input[i];
        input[i] = input[input.length - 1 - i];
        input[input.length - 1 - i] = currentContainer;
    }
    console.log(input.join(' '));
}
reverseArrayStrings(['a', 'b', 'c', 'd', 'e'])