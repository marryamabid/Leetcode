/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let cols = image[0].length
    let rows = image.length
    let originalColor = image[sr][sc]
    if(originalColor === color){
        return image
    }
    function dfs(r,c){
        if(r<0 || c<0 || r >= rows || c >= cols || image[r][c] !== originalColor){
            return 
        }
        image[r][c] =color
        dfs(r,c-1)
        dfs(r-1,c)
        dfs(r,c+1)
        dfs(r+1,c)
    }
    dfs(sr,sc)
    return image
};