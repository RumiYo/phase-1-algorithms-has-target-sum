function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i =0 ; i < array.length-1 ; i++){
    for (let j = i+1 ; j< array.length; j++){
      let sum = array[i]+array[j];
      if (sum === target){
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  (n²+n)/2 so after removing constant n²
*/

/* 
  Add your pseudocode here
  - Pick the first valune from id = 0 and ++
  - Pick the second

*/

/*
  Add written explanation of your solution here
  - pair numbers in the array 
  - sum them up
  - check if the summed value is the same with the target value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 6, 12, 4, 11, 70, 123, 1000,14], 111));
  ;

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 6, 12, 4, 11, 7, 100], 111));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
