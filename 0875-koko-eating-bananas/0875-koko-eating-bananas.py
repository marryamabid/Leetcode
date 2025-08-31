from typing import List
import math

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        left, right = 1, max(piles)
        res = right

        while left <= right:
            mid = (left + right) // 2
            hours = 0
            for pile in piles:
                hours += math.ceil(pile / mid)   # time to eat this pile at speed mid

            if hours <= h:
                res = mid   # possible, try smaller speed
                right = mid - 1
            else:
                left = mid + 1

        return res
