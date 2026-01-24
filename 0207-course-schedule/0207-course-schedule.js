/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let graph = Array.from({length:numCourses}, ()=>[])
    for (let [a,b] of prerequisites){
        graph[b].push(a)

    }
    let state = new Array(numCourses).fill(0)
    function dfs(course){
        if(state[course]===1)return false
        if(state[course]===2) return true

        state[course] = 1
        for(let next of graph[course]){
            if(!dfs(next)) return false
        }
        state[course] = 2
        return true
    }
    for(let i=0; i<numCourses; i++){
        if(!dfs(i)) return false
    }
    return true
};