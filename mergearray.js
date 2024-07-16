/*4. Merge two arrays and add an additional element at the beginning of the merged array using the spread operator.*/

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const additionalElement = 0;

const mergedArray = [additionalElement, ...array1, ...array2];

console.log(mergedArray); // Output: [0, 1, 2, 3, 4, 5, 6]
