/*5. Given an array of objects representing users with name and age properties, write a function that returns an array of names of users who are over18.
const users = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 19 },
  { name: 'David', age: 15 }
];
*/

const users = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 19 },
    { name: 'David', age: 15 }
  ];
  
  function getNamesOver18(users) {
    return users
      .filter(user => user.age > 18) // Filter users who are over 18
      .map(user => user.name);       // Map the filtered users to their names
  }
  
  const namesOver18 = getNamesOver18(users);
  console.log(namesOver18); // Output: ['Alice', 'Charlie']
  