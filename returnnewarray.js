function squareNumbers(arr) {
    return arr.map(function(num) {
        return num * num;
    });
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
