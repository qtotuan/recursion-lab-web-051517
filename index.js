// Code your solution here!

function printString(string) {
  console.log(string[0])

  if (string.length === 1) {
    return ""
  }

  return printString(string.split("").slice(1).join(""))
}

// printString("pizza")


function reverseString(string) {
  if (string.length === 0) {
    return ""
  }
  return reverseString(string.split("").slice(1).join("")) + string[0]
}

// console.log(reverseString("pizza"))

function isPalindrome(string) {
  if (string.length <= 1) {
    return true
  }

  if (string[0] === string[string.length - 1]) {
    isPalindrome(string.split("").slice(1, string.length - 1).join(""))
  } else {
    return false
  }

  return true
}

// console.log(isPalindrome("abcd")) // false
// console.log(isPalindrome("abccba")) // true
// console.log(isPalindrome("abcba")) // true

// function addUpTo(array, index) {
//   if (array.length === 1) {
//     return array[0]
//   }
//
//   // Shorten the array to the needed length of "index"
//   let modifiedArray = []
//   if (array.length > index) {
//     for (let i = 0; i <= index; i++) {
//       modifiedArray.push(array[i])
//     }
//   } else {
//     modifiedArray = array
//   }
//
//   console.log(modifiedArray);
//
//
//   return addUpTo(modifiedArray.slice(1, modifiedArray.length), index) + modifiedArray[0]
// }

function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, --index) : array[index]
}

// console.log(addUpTo([1, 4, 5, 3], 2)) // 10
// console.log(addUpTo([4, 3, 1, 5], 1)) // 7

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  }
  if (array[0] < array[1]) {
    return maxOf(array.slice(1))
  } else {
    array.splice(1,1)
    return maxOf(array)
  }
}

// console.log(maxOf([1, 4, 5, 3]))

// function test(array) {
//   if (array.length === 1) {
//     console.log(array[0]);
//     return array[0]
//   }
// }

// test([15])



// function fibonacci(n) {
//   if (n === 0) {
//     return 0
//   }
//
//   if (n === 1) {
//     return 1
//   }
//
//   return fibonacci(n-1) + fibonacci(n-2) + 1
// }
// console.log(fibonacci(4))


function includesNumber(array, number) {
  if (array.length === 0) {
    return false
  }
  if (array[0] === number) {
    return true
  }
  return includesNumber(array.slice(1), number)
}
// console.log(includesNumber([1, 2, 3, 4], 10));
