from typing import List

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        ROWS, COLS = len(board), len(board[0])

        def backtrack(r, c, i):
            # i = index in the word
            if i == len(word):  # all chars found
                return True
            if (r < 0 or c < 0 or r >= ROWS or c >= COLS or 
                board[r][c] != word[i]):
                return False

            # mark visited
            temp = board[r][c]
            board[r][c] = "#"

            # explore neighbors
            res = (backtrack(r+1, c, i+1) or
                   backtrack(r-1, c, i+1) or
                   backtrack(r, c+1, i+1) or
                   backtrack(r, c-1, i+1))

            # backtrack (restore)
            board[r][c] = temp
            return res

        for r in range(ROWS):
            for c in range(COLS):
                if backtrack(r, c, 0):
                    return True
        return False

 
        