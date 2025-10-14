class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
       
        
        def buildGraph(isConnected):
            n = len(isConnected)
            graph = defaultdict(list)
            for i in range(n):
                for j in range(n):
                    if isConnected[i][j] == 1 and i != j:
                        graph[i].append(j)
            return graph
        
        def explore(graph,current, visited):
            if current in visited:
                return False
            visited.add(current)
            for neighbor in graph[current]:
                explore(graph,neighbor , visited)
            return True

        visited = set()
        count = 0
        graph = buildGraph(isConnected)
        n = len(isConnected)
        for city in range(n):
            if explore(graph, city, visited):
                count += 1

        return count

