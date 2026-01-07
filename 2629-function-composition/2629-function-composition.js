/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let composed = x
        for(let i =(functions.length)-1; i >= 0 ; i--){
            const fun = functions[i]
            composed = fun(composed)
        }
        return composed
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */