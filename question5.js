function mathIsFun(numberString) {
    /*
    This is the more efficient approach to question 5.
    Runs in O(n) constant time and O(1) space complexity theoretically
    */
    const numbers = numberString.split("|")
    let largest = Math.max(Number(numbers[0]), Number(numbers[1]))
    let second = Math.min(Number(numbers[0]), Number(numbers[1]))

    for (let i = 2; i < numbers.length; i++) {
        if (Number(numbers[i]) > largest) {
            second = largest;
            largest = Number(numbers[i]);
        } else if (Number(numbers[i] > second)) {
            second = Number(numbers[i]);
    }
}
    return largest + second
}

function bruteForce(numberString) {
    /*
    This is the brute force approach to question 5.
    Runs in O(n)^2 constant time and O(1) space complexity
    */
    const numbers = numberString.split("|")
    let maxSum = undefined;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let sum = Number(numbers[i]) + Number(numbers[j]);

            if (sum > maxSum || maxSum === undefined) {
                maxSum = sum;
            }
        }
    }
    return maxSum
}

console.log(mathIsFun("12|13|-4|5|"))
console.log(bruteForce("12|13|-4|5|"))