/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let cols = matrix[0].length
    let rows = matrix.length

    let left = 0
    let right = rows * cols -1    //// cols → which row
                //% cols → which column
    while(left <= right){
        let mid = Math.floor((left+right)/2)

        let r = Math.floor(mid/cols)
        let c = mid % cols
        let val = matrix[r][c]
        if(val === target){
            return true
        }else if( val < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return false
};