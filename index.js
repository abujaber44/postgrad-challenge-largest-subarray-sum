function largestSubarraySum(array) {

    let maxSoFar = array[0];
    let prevMax = array[0];

    for (let i = 1; i < array.length; i++) {
        prevMax = Math.max(array[i], array[i] + prevMax);
        if (prevMax > maxSoFar) {
            maxSoFar = prevMax;
        }
    }
    return maxSoFar;
}