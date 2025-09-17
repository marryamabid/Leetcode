class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res=[]
        def backTrack(start,target,path):
            
            if target == 0 :
                return res.append(path[:])
            if target < 0:
                return None
           
            for i in range(start,len(candidates)):
                n=candidates[i]
                remainder = target - n
                path.append(n)
                remaiderResult = backTrack(i,remainder,path)
                path.pop()
        backTrack(0,target,[])
        return res
