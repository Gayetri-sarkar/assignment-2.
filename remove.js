/*9. Write a function that removes the third element from an array and returns a new array with the removed element. Do not modify the original array.  
*/

function removeThirdElement(arr) {
    if (arr.length < 3) {
      // If the array has less than 3 elements, return a copy of the original array
      return [...arr];
    }
  
    // Create a copy of the original array
    const newArr = arr.slice();
  
    // Remove the third element (index 2)
    newArr.splice(2, 1);
  
    return newArr;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5];
  const newArray = removeThirdElement(originalArray);
  
  console.log(newArray); // [1, 2, 4, 5]
  console.log(originalArray); // [1, 2, 3, 4, 5] - original array remains unchanged
  