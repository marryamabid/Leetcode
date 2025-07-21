class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        closeToOpen = {')': '(', '}': '{', ']': '['}
        count = 0
        stack=[]
        for c in s:
            if  c in closeToOpen:
                if stack and stack[-1] == closeToOpen[c]:
                    stack.pop()
                else:
                    count +=1

            else:
                stack.append(c)

        return count+len(stack)