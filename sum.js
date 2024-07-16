/*6. Write a function that takes an array of numbers and returns an object with two properties: sum, the sum of all the numbers, and product, the product of all the numbers using reduce method.
*/

function calculateSumAndProduct(arr) {
    let sum = 0;
    let product = 1;
    
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      product *= arr[i];
    }
    
    return { sum, product };
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4];
  const result = calculateSumAndProduct(numbers);
  console.log(result); // { sum: 10, product: 24 }
  