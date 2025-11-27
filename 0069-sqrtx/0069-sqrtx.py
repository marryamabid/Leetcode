class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x  # 0 and 1 are trivial cases

        left, right = 1, x // 2  # No need to check beyond x//2
        while left <= right:
            mid = (left + right) // 2
            if mid * mid == x:
                return mid
            elif mid * mid < x:
                left = mid + 1
            else:
                right = mid - 1

        return right  # right will be the integer part of sqrt(x)

        