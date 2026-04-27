/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let cols = matrix[0].length
    let rows = matrix.length

    let col0=1
    // for left and top updates 
    for(let i =0; i< rows; i++){
        if(matrix[i][0] === 0) col0=0
        for(let j=1 ; j < cols; j++){
            if(matrix[i][j] === 0 ){
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }
    //for inner updates
    for(let i = 1; i< rows; i++){
        for(let j =1; j < cols; j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0 ){
                matrix[i][j] = 0
            }
        }
    }
    if(matrix[0][0] ===0){
        for(let j =1; j< cols; j++){
            matrix[0][j] =0
        }
    }
    if(col0===0){
        for(let i =0; i < rows; i++){
            matrix[i][0] =0
        }
    }
};