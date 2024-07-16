var foo; // Variable declaration is hoisted to the top
console.log(foo); // First console.log
foo = "Hello, World!"; // Variable initialization
console.log(foo); // Second console.log
/*The first console.log(foo); prints undefined because foo is hoisted and declared but not yet initialized.
The second console.log(foo); prints "Hello, World!" because foo has been assigned the value "Hello, World!".
Output
plaintext

output:
undefined
Hello, World! */