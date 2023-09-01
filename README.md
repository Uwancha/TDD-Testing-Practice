# TDD-Testing-Practice

This project is part of The Odin Project's curriculum for learning full stack web development. It focuses on implementing functionalities using Test-Driven Development (TDD) principles.

## Assignments

1. Caesar Cipher

   - Description: Implement a function that encrypts and decrypts messages using the Caesar cipher technique.
   - File: `caesarCipher.js`
   - Test File: `caesarCipher.test.js`

2. Array Analysis

   - Description: Build a function that analyzes an array of numbers and returns an object with properties such as average, minimum, maximum, and length.
   - File: `analyzeArray.js`
   - Test File: `analyzeArray.test.js`

3. Capitalize

   - Description: Develop a function that takes a string as input and returns the same string with the first letter capitalized.
   - File: `capitalize.js`
   - Test File: `capitalize.test.js`

4. Reverse String

   - Description: Create a function that reverses a given string.
   - File: `reverseString.js`
   - Test File: `reverseString.test.js`

## Testing

The project includes comprehensive test suites for each assignment. The test cases cover various scenarios and edge cases to ensure the correctness of the implemented functionalities.

To run the tests, use the following command:

```bash
npm test
```

## Usage

You can use the provided functions in your own projects by importing them. Follow the usage examples below:

### Caesar Cipher

```javascript
import { caesarCipher } from './caesarCipher.js';

const encryptedMessage = caesarCipher('Hello, World!', 3);
console.log(encryptedMessage); // Output: 'Khoor, Zruog!'

const decryptedMessage = caesarCipher('Khoor, Zruog!', -3);
console.log(decryptedMessage); // Output: 'Hello, World!'
```

### Array Analysis

```javascript
import { analyzeArray } from './analyzeArray.js';

const array = [1, 8, 3, 4, 2, 6];
const analysis = analyzeArray(array);

console.log(analysis.average); // Output: 4
console.log(analysis.minimum); // Output: 1
console.log(analysis.maximum); // Output: 8
console.log(analysis.length);  // Output: 6
```

### Capitalize

```javascript
import { capitalize } from './Capitalize.js';

const capitalizedString = Capitalize('hello, world!');
console.log(capitalizedString); // Output: 'Hello, world!'
```

### Reverse String

```javascript
import { reverseString } from './reverseString.js';

const reversedString = reverseString('hello, world!');
console.log(reversedString); // Output: '!dlrow ,olleh'
```

Feel free to incorporate these functions into your own projects as needed.