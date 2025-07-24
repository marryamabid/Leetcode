class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        students = deque(students)
        sandwiches = deque(sandwiches)
        count = 0  # To track rotations without success

        while students and count < len(students):
            if students[0] == sandwiches[0]:
                students.popleft()
                sandwiches.popleft()
                count = 0  # Reset if someone eats
            else:
                students.append(students.popleft())  # Send to end
                count += 1  # Increase unsuccessful attempts

        return len(students)