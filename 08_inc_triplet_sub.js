// My wrong logic
// var increasingTriplet = function(nums) {
//     let counter = 0; 
//     let istriplet = false; 
//     let highestNum = 0; 
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] < nums[i+1]){
//             console.log("num[i] < num[i + 1]" , "nums[i]" , nums[i] , "nums[i + 1] " , nums[i + 1] , nums[i] < nums[i + 1] )
//             highestNum = nums[ i + 1]
//             console.log("if counter" , counter)
//             counter++
//         }else if(i !== 0 && highestNum < nums[i + 1]){
//             console.log("else if counter" , counter)
//             highestNum = nums[i + 1]
//             counter ++
//         }
        
//         if(!nums[i + 1] && Math.abs(nums[i]) < nums[nums.length - i - 1]){
//             console.log("last counter" , counter)
//             counter ++
//         }
        
//         if(counter === 2){
//             console.log("istriplet outside loop" , istriplet)
//             return istriplet = true
//         }
//     }
//     return istriplet; 
// };

// //   console.log(increasingTriplet([1, 2]))                   // false (too short)
// //   console.log(increasingTriplet([1, 2, 3]))                // true
//   console.log(increasingTriplet([5, 4, 3, 2, 1]))        // false
// //   console.log(increasingTriplet([1, 5, 0, 4, 1, 3]))       // true
// //   console.log(increasingTriplet([2, 1, 5, 0, 4, 6]))       // true
// //   console.log(increasingTriplet([20, 100, 10, 12, 5, 13])) // true
// //   console.log(increasingTriplet([1, 1, 1, 1]))             // false
// //   console.log(increasingTriplet([-5, -4, -3])) 

// chatgpt logic

var increasingTriplet = function(nums) {
    let firstNum = Infinity;
    let secondNum = Infinity;

    for (let num of nums) {
        if (num <= firstNum) {
            firstNum = num;       // ab tak ka sabse chhota
        } else if (num <= secondNum) {
            secondNum = num;      // chhote ke baad bada mila
        } else {
            // num > second ⇒ 3 numbers mil gaye
            return true;
        }
    }

    return false;
};

  console.log(increasingTriplet([1, 2]))                   // false (too short)
  console.log(increasingTriplet([1, 2, 3]))                // true
  console.log(increasingTriplet([5, 4, 3, 2, 1]))        // false
  console.log(increasingTriplet([1, 5, 0, 4, 1, 3]))       // true
  console.log(increasingTriplet([2, 1, 5, 0, 4, 6]))       // true
  console.log(increasingTriplet([20, 100, 10, 12, 5, 13])) // true
  console.log(increasingTriplet([1, 1, 1, 1]))             // false
  console.log(increasingTriplet([-5, -4, -3])) 
