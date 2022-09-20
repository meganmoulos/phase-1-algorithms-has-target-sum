// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   if (array.length < 2) {
//     return false
//   }
//   for (let i = 0; i < array.length; i++){
//     for(let j = i + 1; j < array.length; j++){
//       if (array[i] + array[j] === target){
//         return true
//       }
//     }
//   }
//   return false
// }

function hasTargetSum(array, target){
  const seeNumbers = {}
  for (const number of array){
    const complement = target - number
    if (seeNumbers[complement]){
      return true
    }
    seeNumbers[number] = true
  }
  return false
}


/* 
  Write the Big O time complexity of your function here
  Time - Quadratic 
  Space - O(n)
*/

/* 
  Add your pseudocode here
*/ 
// If only one number in array, return false. Add the first number to the second number, then add the first number to the third number, then the 4th, etc. Then move to the 2nd number, add to the third number, etc. Each time compare it to the target number. Test case - negative numbers. 
/*
  Add written explanation of your solution here
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
