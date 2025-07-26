from collections import deque
class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        students = deque(students)
        sandwiches = deque(sandwiches)
        count =0
        while students and count < len(students):
            if students[0] == sandwiches[0]:
                sandwiches.popleft()
                students.popleft()
                count = 0
            else:
                students.append(students.popleft())
                count += 1
        return len(students)


