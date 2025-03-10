/**
 * getLengthOfString()
 * ---------------------
 * Returns the length of a string.
 * @param {string} str
 * @returns {number}
 *
 * EXAMPLE:
 *  getLengthOfString("down");
 *  //> 4
 */
function getLengthOfString(str) {
  // input: `str` is a string
  // output: returns the number of characters in a string

  // problem: How do I count the number of characters in a string?
  // solution: .length property
  return str.length;
}

/**
 * convertToNumber()
 * ---------------------
 * Converts the inputted value into a number.
 * @param {*} val
 * @returns {number}
 *
 * EXAMPLE:
 *  convertToNumber("111");
 *  //> 111
 */
function convertToNumber(val) {
  // input: val can be any data type
  // ouput: returns the number value of any data type `val`

  return Number(val);
}

/**
 * convertToString()
 * ---------------------
 * Converts the inputted value into a string.
 * The value is guaranteed to NOT be null or undefined.
 * @param {*} val
 * @returns {string}
 *
 * EXAMPLE:
 *  convertToString(99);
 *  //> "99"
 */
function convertToString(val) {
  // input: val can be any data type
  // output: return a string of val using template literals

  return `${val}`;
}

/**
 * convertToShoutingText()
 * ---------------------
 * Converts the inputted text into all uppercase characters.
 * @param {string} text
 * @returns {string}
 *
 * EXAMPLE:
 *  convertToShoutingText("Hello There");
 *  //> "HELLO THERE"
 */
function convertToShoutingText(text) {
  // input: text is a string
  // output: return a string that converts `text` into all uppercase characters

  return text.toUpperCase();
}

/**
 * convertToWhisperText()
 * ---------------------
 * Converts the inputted text into all lowercase characters.
 * @param {string} text
 * @returns {string}
 *
 * EXAMPLE:
 *  convertToWhisperText("Hello There");
 *  //> "hello there"
 */
function convertToWhisperText(text) {
  // input: text is a string
  // output: returns a string that converts `text` into all lowercase characters

  return text.toLowerCase();
}

/**
 * checkIfCharacterIsInString()
 * ---------------------
 * Checks if the given `character` appears in the `text`.
 * @param {string} text
 * @param {string} character
 * @returns {boolean}
 *
 * EXAMPLE:
 *  checkIfCharacterIsInString("hello there", "e");
 *  //> true
 *
 *  checkIfCharacterIsInString("hello there", "a");
 *  //> false
 */
function checkIfCharacterIsInString(text, character) {
  // input: text is a string and character is a string with one letter
  // output: return true if the `character` appears in the `text` otherwise return false

  // problem: how do we check if the `character` appears in `text`
  // solution: loop

  // // loop through string
  // for (let i = 0; i < text.length; i++) {
  //   const str = text[i]
  //   // if the `character` appears in the `text`
  //   if (str === character) {
  
  //     // return true
  //     return true
  //   }
  // }
  
  // // otherwise return false
  // return false

  // or use string method .includes a case sensitive search that returns a boolean if one string is found in another str

  return text.includes(character);
}

/**
 * isEven()
 * ---------------------
 * Returns `true` if the number given is even. Otherwise, returns false.
 * @param {number} num
 * @returns {boolean}
 *
 * EXAMPLE:
 *  isEven(10);
 *  //> true
 *
 *  isEven(11);
 *  //> false
 */
function isEven(num) {
  // input: num is a number
  // output: return true if the number given is even more otherwise return false

  // problem: How do I check if a number is even?
  // solution: modulo %

  // // if the number given is even 
  // if (num % 2 === 0) {
  //   // return true
  //   return true
  // }
  // // otherwise return false
  // return false

  // == strictly equal to operator returns true or false
  return num % 2 === 0;
}

/**
 * isOdd()
 * ---------------------
 * Returns `true` if the number given is odd. Otherwise, returns `false`.
 * @param {number} num
 * @returns {boolean}
 *
 * EXAMPLE:
 *  isOdd(10);
 *  //> false
 *
 *  isOdd(11);
 *  //> true
 */
function isOdd(num) {
  // input: num is a number
  // output: return true if the number given is odd otherwise return false

  // // if the number given is odd
  // if (num % 2 === 1) {
  //   // return true
  //   return true
  // }

  // // otherwise return false
  // return false

  // // == strictly equal to operator returns true or false
  // return num % 2 === 1

  // // num is odd if the function isEven is strictly equal to false 
  // return isEven(num) === false

  // num is odd if the function isEven is not even
  return !isEven(num);
}

/**
 * isTruthy()
 * ---------------------
 * Returns `true` if the value given is a truthy value. Otherwise, returns `false`.
 * @param {*} val
 * @returns {boolean}
 *
 * EXAMPLE:
 *  isTruthy(10);
 *  //> true
 *
 *  isTruthy(null);
 *  //> false
 */
function isTruthy(val) {
  // input: val is any datatype
  // output: return true if the value given is truthy otherwise return false
  
  // // if the value given is truthy it will execute code
  // if (val) {
  //   // return true
  //   return true
  // }
  
  // // otherwise return false if the value given is falsy
  // return false

  // if the value given is truthy and you put two bang operators to turn !!truthy -> !false --> true it will return true
  // if the value given is falsy and you put two bang operators to turn !!falsy -> !true -> false it will return false
  return !!val;
}



/**
 * isFalsy()
 * ---------------------
 * Returns `true` if the value given is a falsy value. Otherwise, returns `false`.
 * @param {*} val
 * @returns {boolean}
 *
 * EXAMPLE:
 *  isFalsy(undefined);
 *  //> true
 *
 *  isFalsy(" ");
 *  //> false
 */
function isFalsy(val) {
  // input: val is any datatype
  // output: return true if the value given us a falsy value otherwise return false

  // if the value given is falsy and you put a bang operator to turn falsy -> true it will execute code 
  // if the value given is truthy and you put a bang operator to turn truthy -> false it will not execute code and return false
  // if (!val) {
    
  //   // return true return true
  //   return true
  // }
  
  // // return false
  // return false

  return !val;
}

// Do not change the code below.
module.exports = {
  getLengthOfString,
  convertToNumber,
  convertToString,
  convertToShoutingText,
  convertToWhisperText,
  checkIfCharacterIsInString,
  isEven,
  isOdd,
  isTruthy,
  isFalsy,
};
