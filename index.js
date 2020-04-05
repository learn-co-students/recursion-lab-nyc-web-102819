function printString(str) {
    console.log(str[0]);
    if (str.length > 1) {
      let mySubString = str.substring(1, str.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

  function reverseString(str) {
    if (str.length < 2) {
      return str;
    } else {
      return reverseString(str.substring(1)) + str[0];
    }
  }

  function isPalindrome(str) {
    let len = str.length;
    if (len < 2) {
      return true;
    } else if (str[len - 1] === str[0]) {
      return isPalindrome(str.substring(1, len - 1));
    } else {
      return false;
    }
  }

  function maxOf(arr) {
    if (arr.length === 1) {
      return arr[0];
    } else {
      return Math.max(arr.pop(), maxOf(arr));
    }
  }

  function addUpTo(myArray, index) {
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
  }

  function includesNumber(arr, num) {
    if (!arr.length) {
      return false;
    } else if (arr[0] === num) {
      return true;
    } else {
      return includesNumber(arr.slice(1), num);
    }
  }
