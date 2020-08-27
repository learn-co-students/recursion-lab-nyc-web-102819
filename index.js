// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubstring = myString.substring(1);
    
    printString(mySubstring);

  } else {
    return true;
  }
}
 
function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0]
  }
  return true
}

function isPalindrome(string) {

  if (string.length < 2) {
    return true
  } else if (string[0] === string[string.length -1]) {
    return isPalindrome(string.substring(1, string.length - 1))
  } else {
    return false
  }

}

function addUpTo(arr, idx) {
  // [1,2,3,4 ,5], idx = 3
  if (!!idx) {
    return arr[idx] + addUpTo(arr, --idx)
  } else {
    return arr[idx]
  }
}

function maxOf(arr){
  // [1,2,3,4,5]

  if (arr.length < 2) {
    return arr[0]
  } else {
    return Math.max(arr.pop(), maxOf(arr))
  }
}

function includesNumber(arr, num) {
  if (arr.length < 1) {
    return false
  } else if (arr[0] === num){
    return true 
  } else {
    return includesNumber(arr.slice(1), num)
  }
}
