function hasTargetSum(array, target) {
  // Write your algorithm here
  let firstElement = array[0];
  if(array.length === 1) {
    return false
  };
  if (firstElement > target) {
    let shifted = array.shift();
    return hasTargetSum(array, target)
  };
  for (let i = 1; i <= array.length; i++) {
    if(target == array[i] + firstElement) {
      return true
    }
    if(i === array.length-1) {
      let shifted = array.shift();
      return hasTargetSum(array, target);
    }
  };
};

/* 
  Write the Big O time complexity of your function here
  linear time: 0(n)
*/

/* 
  Add your pseudocode here
  store the first element of the array
  iterate through the array, excluding the first element
    if the element is greater than our target
      remove the element
    if there is only one element or no element in the array
      return false
    if the sum of the first element and the current element is true
      return true
    if it is not the target sum
      if this is the last element of the array
        pop the first element and start over
      otherwise 
        repeat with next element


    
*/

/*
  Add written explanation of your solution here
  If the array was sorted, we could have just disregarded numbers greater than
  the target sum. Since that is not always the case, we would have to loop through
  the array until all the numbers have been tested (linear time: 0(n)). Potentially,
  this could be quadratic time 0(n^2), since we have to do nested loop to find a 
  corresponding pair(s) of values that equal the targeted value.

  We will start with the first element and adding it up every other subsequent elements.
  If it returns false, we will shift() that element and repeat the process.
  If it returns true, then we are done.
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
