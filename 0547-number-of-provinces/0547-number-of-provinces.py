class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        visited = set()

        def dfs(city):
            for neighbor in range(n):
                if isConnected[city][neighbor] == 1 and neighbor not in visited:
                    visited.add(neighbor)
                    dfs(neighbor)

        provinces = 0
        for i in range(n):
            if i not in visited:
                provinces += 1
                visited.add(i)
                dfs(i)

        return provinces
        