class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones = [-s for s in stones]
        heapq.heapify(stones)


        while len(stones) > 1:
        # Get two heaviest stones
            first = -heapq.heappop(stones)
            second = -heapq.heappop(stones)


            if first != second:
                heapq.heappush(stones, -(first - second))

        return -stones[0] if stones else 0
