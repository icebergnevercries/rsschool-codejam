module.exports = function sumOfOther(arr) {
    let sum = arr.reduce(function(pV, cV){ return pV += cV; });
    return arr.map(function(curr){return sum - curr;});
}