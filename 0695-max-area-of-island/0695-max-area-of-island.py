class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        if not grid:
            return 0
        rows=len(grid)
        cols = len(grid[0])
        max_area = 0
        for r in range(rows):
            for c in range(cols):
                if grid[r][c]== 1:
                    max_area= max(max_area,dfs(r,c))
        return max_area
        def dfs(r,c):
            if r<0 or c<0 or r>=rows or c>= cols:
                return 0
            size = 1
            size+=dfs(r-1,c)
            size+=dfs(r-1,c)
            size+=dfs(r-1,c)
            size+=dfs(r-1,c)