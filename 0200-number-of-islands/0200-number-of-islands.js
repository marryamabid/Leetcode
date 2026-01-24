/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid || grid.length ===0) return 0
    let rows = grid.length
    let cols = grid[0].length
    let count = 0
    function dfs(r,c){
        if ( r<0 ||  c<0|| r>=rows || c>=cols ||grid[r][c]==="0" ) return
        grid[r][c] = "0"
        dfs(r-1,c)
        dfs(r+1,c)
        dfs(r,c-1)
        dfs(r,c+1)
    }
    for(let r=0; r< rows; r++){
        for(let c=0; c< cols; c++){
            if(grid[r][c]==="1"){
                count++
                dfs(r,c)
            }
        }
    }
    return count
};