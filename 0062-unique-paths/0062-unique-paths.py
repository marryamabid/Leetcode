class Solution:
    def uniquePaths(self, m: int, n: int, map={}) -> int:
        key = str(m) +","+ str(n)
        if (key in map):
            return map[key]
        if (m==1 and n==1):
            return 1
        if (m==0 or n== 0 ):
            return 0
        
        map[key] = self.uniquePaths(m-1,n,map) + self.uniquePaths(m,n-1,map) 
        return map[key]