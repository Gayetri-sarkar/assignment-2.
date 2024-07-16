/*10. Write a function that concatenates two arrays without using the concat method. */

function concatenateArrays(arr1, arr2) {
    const result = [];
  
    for (let i = 0; i < arr1.length; i++) {
      result.push(arr1[i]);
    }
  
    for (let j = 0; j < arr2.length; j++) {
      result.push(arr2[j]);
    }
  
    return result;
  }
  
  // Example usage:
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const concatenatedArray = concatenateArrays(array1, array2);
  
  console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]
  