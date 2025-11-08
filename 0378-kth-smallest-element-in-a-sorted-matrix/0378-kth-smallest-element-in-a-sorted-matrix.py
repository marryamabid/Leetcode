import heapq
from typing import List

class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        n = len(matrix)
        min_heap = []
        
        
        for r in range(min(k, n)):
            heapq.heappush(min_heap, (matrix[r][0], r, 0))
    
        while k > 0:
            val, r, c = heapq.heappop(min_heap)
            k -= 1
            
           
            if c + 1 < n:
                heapq.heappush(min_heap, (matrix[r][c + 1], r, c + 1))
        
        return val

