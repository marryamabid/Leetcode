from typing import List

class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        rows, cols = len(image), len(image[0])
        startColor = image[sr][sc]
        
        if startColor == newColor:  # no need to change
            return image

        def dfs(r, c):
            if r < 0 or c < 0 or r >= rows or c >= cols:
                return
            if image[r][c] != startColor:
                return
            image[r][c] = newColor
            dfs(r+1, c)
            dfs(r-1, c)
            dfs(r, c+1)
            dfs(r, c-1)

        dfs(sr, sc)
        return image

        