from collections import deque
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])

        q = deque()
        fresh = 0
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 2:
                    q.append((r,c,0))
                elif grid[r][c]==1:
                    fresh +=1
        directions=[(0,1),(-1,0),(1,0),(0,-1)]
        fresh_count = 0
        minutes = 0
        while q:
            r,c,m = q.popleft()
            minutes = max(minutes,m)
            for rd,cd in directions:
                nr = rd+r 
                nc = cd + c
                if 0 <= nr < rows and  0 <= nc < cols and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    fresh_count +=1
                    q.append((nr,nc,m+1))
        if fresh_count == fresh:
            return minutes
        else:
            return -1