/*
7. Write a function that returns the array sorted by the length of each string, in ascending order.*/



function sortByStringLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
  }
  
  // Example usage:
  const strings = ["apple", "banana", "kiwi", "cherry"];
  const sortedStrings = sortByStringLength(strings);
  console.log(sortedStrings); // ["kiwi", "apple", "cherry", "banana"]
  