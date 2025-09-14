from typing import List

class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        board = [["."] * n for _ in range(n)]
        res = []
        
        cols = set()      
        posDiag = set()   
        negDiag = set()   

        def backtrack(r):
            if r == n:  
                res.append(["".join(row) for row in board])
                return
            
            for c in range(n):
                if c in cols or (r + c) in posDiag or (r - c) in negDiag:
                    continue 
                
              
                board[r][c] = "Q"
                cols.add(c)
                posDiag.add(r + c)
                negDiag.add(r - c)

             
                backtrack(r + 1)

               
                board[r][c] = "."
                cols.remove(c)
                posDiag.remove(r + c)
                negDiag.remove(r - c)

        backtrack(0)
        return res