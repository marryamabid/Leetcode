import heapq

class Solution:
    def kClosest(self, points, k):
        heap = []
        
        # Step 1: Push (distance, point) pairs
        for (x, y) in points:
            dist = x * x + y * y
            heapq.heappush(heap, (dist, [x, y]))
        
        # Step 2: Extract k smallest distances
        result = []
        for _ in range(k):
            result.append(heapq.heappop(heap)[1])
        
        return result
