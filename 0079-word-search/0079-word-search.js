/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length
    let cols = board[0].length

    function dfs(r,c,i){
        if(i === word.length){
            return true
        }
        //boundary and matching char
        if(r < 0 || c <0 || r >= rows || c>= cols || board[r][c] !== word[i]){
            return false
        }
        //marked the visited chars
        let temp = board[r][c]
        board[r][c] = "#"

        //visit all four directions
        let found = (dfs(r,c+1,i+1) ||
                    dfs(r+1,c,i+1) ||
                    dfs(r-1,c,i+1) ||
                    dfs(r,c-1,i+1) )
        //backtrack the marked value
        board[r][c] = temp
        return found
    }
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(dfs(r,c,0)){
                return true
            }
        }
    }
    return false
};