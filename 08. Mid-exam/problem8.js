function problem8(input) {
    let array = input
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < input.length - 1; i++) {
        let currentElement = input[i].split(' ');
        let command = currentElement[0];
        let index1 = Number(currentElement[1]);
        let index2 = Number(currentElement[2]);
        switch (command) {
            case "swap":
                let elementHolder = array[index1];
                array.splice(index1, 1, array[index2]);
                array.splice(index2, 1, elementHolder);
                break;
            case "multiply":
                let product = array[index1] * array[index2];
                array[index1] = product;
                break;
            case "decrease":
                for (let j = 0; j < array.length; j++){
                    array[j] = array[j] - 1;
                }
        }
    }
    console.log(array.join(', '));
}
problem8([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])