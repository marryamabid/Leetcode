class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:

        def binarySearch(nums,target,leftBaise):
            l = 0
            r = len(nums)-1
            i=-1
            while l<=r:
                m = l+((r-l)//2)
                if nums[m] < target:
                    l=m+1
                elif nums[m] > target:
                    r=m-1
                else:
                    i=m
                    if leftBaise:
                        r = m-1
                    else:
                        l=m+1
            return i
        left = binarySearch(nums,target,True)
        right  = binarySearch(nums,target,False)
        return [left,right]