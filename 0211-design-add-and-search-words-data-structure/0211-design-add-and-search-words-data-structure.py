class TreiNode:
    def __init__(self):
       self.children = {}
       self.endOfWord = False 
class WordDictionary:
    def __init__(self):
       self.root = TreiNode()
    def addWord(self, word: str) -> None:
        curr =  self.root
        for char in word:
            if char not in curr.children:
                curr.children[char] = TreiNode()
            curr = curr.children[char]
        curr.endOfWord = True
              

    def search(self, word: str) -> bool:
        def dfs(index,node):
            if index == len(word):
                return node.endOfWord
            char = word[index]
            if char == ".":
                for child in node.children.values():
                    if dfs(index+1,child):
                        return True
                    return False
            else:
                if char in node.children:
                    return dfs(index+1,node.children[char])
                else:
                    return False
        return dfs(0,self.root)

# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)