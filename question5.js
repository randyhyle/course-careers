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

console.log(mathIsFun("12|13|-4|5|"))