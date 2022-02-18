function problem14(input) {
    let arr = input
        .shift()
        .split(' ')
        .map(Number);

    while (input[0] != 'end') {
        let tokens = input
            .shift()
            .split(' ');
        let elementA = arr[Number(tokens[1])];
        let elementB = arr[Number(tokens[2])];

        switch (tokens[0]) {
            case 'swap':
                arr[tokens[1]] = elementB;
                arr[tokens[2]] = elementA;
                break;
            case 'multiply':
                arr[Number(tokens[1])] = elementA * elementB;
                break;
            case 'decrease':
                for (let i = 0; i < arr.length; i++) {
                    arr[i] -= 1;
                }
                break;
        }
    }
    console.log(arr.join(', '));
}
problem14([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])