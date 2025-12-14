class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = None


class Solution:
    def findWords(self, board, words):
        node =  TrieNode()
        for w in words:
            curr = node
            for ch in w:
                if ch not in curr.children:
                    curr.children[ch] = TrieNode()
                curr =  curr.children[ch]
            curr.word = w
        Cols = len(board[0])
        Rows = len(board)
        res = []
        def dfs(r,c,node):
            ch = board[r][c]
            if ch not in node.children:
                return   #false ke liye
            nextNode = node.children[ch]
            if nextNode.word:
                res.append(nextNode.word)
                nextNode.word = None
            board[r][c] = "#"
            for nr,nc in ([(r+1,c),(r-1,c),(r,c-1),(r,c+1)]):
                if (0 <= nr < Rows and
                    0 <= nc < Cols and
                     board[nr][nc] != "#"):
                        dfs(nr, nc, nextNode)
            
            board[r][c] = ch
            if  not nextNode.children and not nextNode.word:
                del node.children[ch]
        for r in range(Rows):
            for c in range(Cols):
                dfs(r,c,node)
        return res
