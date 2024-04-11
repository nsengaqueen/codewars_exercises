function matrix(array) {
    let size = array.length;

    for (let i = 0; i < size; i++) {
        if (array[i][i] < 0) {
            array[i][i] = 0;
        } else {
            array[i][i] = 1;
        }
    }

    return array;
}

// Example usage:
const inputArray = [
    [-1,  4, -5, -9,  3 ],
    [ 6, -4, -7,  4, -5 ],
    [ 3,  5,  0, -9, -1 ],
    [ 1,  5, -7, -8, -9 ],
    [-3,  2,  1, -5,  6 ]
];


console.log( matrix(inputArray));