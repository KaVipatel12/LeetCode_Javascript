var kidsWithCandies = function(candies , extraCandies ){
    const max = Math.max(...candies); 
    const result = []

    for (let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= max); 
    }
    return result; 
}

console.log(kidsWithCandies([2,3,5,1,3] , 3)); 
console.log(kidsWithCandies([4,2,1,1,2] , 1)); 
console.log(kidsWithCandies([12,1,12] , 10)); 
