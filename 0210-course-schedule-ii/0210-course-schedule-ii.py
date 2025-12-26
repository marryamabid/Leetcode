class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        graph = { i:[] for i in range(numCourses)}
        for crs,pre in prerequisites:
            graph[crs].append(pre)
        output=[]
        visited = set()
        cycle = set()
        def dfs(crs):
            if crs in cycle:
                return False
            if crs in visited:
                return True
            cycle.add(crs)
            for neigbor in graph[crs]:
                if dfs(neigbor) == False:
                    return False
            visited.add(crs)
            cycle.remove(crs)
            output.append(crs)
        for c in range(numCourses):
            if dfs(c) == False:
                return[]
        return output
        