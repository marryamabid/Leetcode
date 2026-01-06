/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function fn(elem,i){
    return elem += i
}
var map = function(arr, fn) {
    let newArr = []
    for(let i=0; i < arr.length; i++){
        newArr.push(fn(arr[i],i))
    }
    return newArr
};