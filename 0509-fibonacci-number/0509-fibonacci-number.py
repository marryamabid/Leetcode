class Solution:

    def fib(self, n: int,map={}) -> int:
        if (n in map):
            return map[n]
        if n <= 1:
            return n
        map[n] =  self.fib(n-1,map) + self.fib(n-2,map)
        return map[n]
        
   