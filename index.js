function hasTargetSum(array, target) {
  const savedNumber = {};
  for (const number of array) {
    const complement = target - number;
    if (savedNumber[complement]) return true;
    savedNumber[number] = true;
  }
  return false;
}

/* 
  Big O Notation: O(n)
*/

/* 
  Pseudocode:
  1. Initialize an empty object `savedNumber` to store the numbers encountered.
  2. Iterate through each number in the array.
    - Calculate the complement by subtracting the current number from the target.
    - Check if the complement exists as a key in the `savedNumber` object.
      - If it does, a pair of numbers adding up to the target has been found. Return `true`.
    - Add the current number as a key to the `savedNumber` object.
  3. If no pair is found after iterating through the entire array, return `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
