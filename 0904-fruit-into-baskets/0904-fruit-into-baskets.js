/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let maxFruit = -Infinity
    let mapFruit = new Map()
    let start = 0
    for(let end = 0; end < fruits.length ; end++){
        const endFruit =  fruits[end]
        mapFruit.set(endFruit,(mapFruit.get(endFruit)|| 0)+1)
        while(mapFruit.size > 2){
            const startFruit = fruits[start]
            mapFruit.set(startFruit,(mapFruit.get(startFruit)|| 0)-1)
            if(mapFruit.get(startFruit) === 0){
                mapFruit.delete(startFruit)
            }
           
            start++
        }
        maxFruit = Math.max(end-start+1,maxFruit)
    }
    return maxFruit
};