// var productExceptSelf = function(nums) {
//     ans = []; 

//     for (let i = 0; i < nums.length; i++) {
//         let ansVal = 1; 
//         for (let j = 0; j < nums.length; j++) {
//             if(nums[i] !== nums[j]){
//                 ansVal *= nums[j]
//             }else{
//                 continue; 
//             }
//         }
//         ans.push(ansVal)
//     }
//     return ans
// };

var productExceptSelf = function(nums) {
    let ans = new Array(nums.length).fill(1);

    let preFix = 1;
    for (let i = 0; i < nums.length; i++) {
        ans[i] = preFix;
        preFix *= nums[i]; 
    }
    
    let suFix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] *= suFix;
        suFix *= nums[i]; // update suFix for next i
    }

    return ans;
};

console.log(productExceptSelf([ 1, 2, 3, 4 , 5]))