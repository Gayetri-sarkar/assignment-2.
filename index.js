/* Given an array of numbers, write a function that returns the index of the first number that is greater than 10. If no such number exists, return -1.*/

function findFirstGreaterThanTen(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        return i;
      }
    }
    return -1;
  }
  
  // Example usage:
  const numbers = [1, 5, 12, 8, 3];
  const index = findFirstGreaterThanTen(numbers);
  console.log(index); // 2