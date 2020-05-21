// Code your solution here!

// const printString = str => {
//   if (str.length === 1) console.log(str)
//   else {
//     console.log(str[0])
//     printString(str.substring(1))
//   }
// }

// this is correct!!! fix the test # 3!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(str) {
  let rStr = ''
  if (str.length > 1) {
    rStr += str[str.length - 1] + reverseString(str.substring(0, str.length - 1))
    // console.log(rStr)
    return rStr
  }
  else {
    // console.log(str)
    return str
  }
}

// function isPalindrome(str) {
//   let newStr = ''
//   if (str.length > 1) {
//     newStr += str[str.length - 1] + reverseString(str.substring(0, str.length - 1))
//     if (newStr === str) return true
//     return false
//   }
//   else return str
// }

function isPalindrome(myString) {
  let l = myString.length;

  if (l < 2) {
    return true;
  } else if (myString[l - 1] === myString[0]) {
    return isPalindrome(myString.substring(1, l - 1));
  } else {
    return false;
  }
}

function addUpTo(arr, ind) {
  let sum = 0
  if (ind > 0) {
    sum += addUpTo(arr, ind - 1) + arr[ind]
    return sum
  }
  else return arr[ind]
}

// function addUpTo(myArray, index) {
//   return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
// }

// function maxOf(arr, max = -Infinity) {
//   if (arr.length > 1) {
//     max = Math.max(max, arr.pop())
//     maxOf(arr, max)
//   }
//   else {
//     // console.log(max)
//     return max
//   }
// }

// function maxOf(arr, max = -Infinity) {
//   if (arr.length > 0) {
//     let current = arr.pop()
//     if (Number.isInteger(current)) {
//       max = Math.max(max, current)
//     }
//     maxOf(arr, max)
//   }
//   else {
//     if (max === -Infinity) max = undefined
//     // console.log(max)
//     return max
//   }
// }

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

// function includesNumber(arr, el, res = false) {
//   // console.log(arr, el, res)
//   if (arr.length > 0) {
//     if (arr.pop() === el) res = true
//     includesNumber(arr, el, res)
//   }
//   else {
//     // console.log(res)
//     return res
//   } 
// }

function includesNumber(myArray, myNumber) {
  if (!myArray.length) {
    return false;
  } else if (myArray[0] === myNumber) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), myNumber);
  }
}