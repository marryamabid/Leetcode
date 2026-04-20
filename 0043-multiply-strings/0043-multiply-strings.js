/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
    if (num1 === "0"  || num2 === "0") return "0" 
    let n = num1.length
    let m = num2.length

    let res = new Array(n+m).fill(0)

    for(let i = n-1; i>=0 ;i--){
        for(let j = m-1; j>=0 ;j--){
            let multiple = (num1[i] - "0") * (num2[j] - "0")
            let p1 = i+j
            let p2 = i+j+1
            let sum = multiple + res[p2]
            res[p2] = sum % 10
            res[p1] += Math.floor(sum / 10);
        }
    }
    let result = res.join("") 
    let i = 0
    while(i < result.length && result[i] === "0" ){
        i++
    }
    return result.slice(i)
}