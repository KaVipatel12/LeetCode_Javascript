var canPlaceFlowers = function(flowerbed, n) {

    if(n === 0) return true
    for (let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] === 0 && flowerbed[i-1] !== 1 && flowerbed[i + 1] !== 1 ){
            flowerbed[i] = 1; 
            console.log(flowerbed)
            n--; 
        }
        if(n <= 0){
            break; 
        }
    }  

    return n <= 0 
};

console.log(canPlaceFlowers([1, 0 , 0 , 0 , 0 , 1] , 1))