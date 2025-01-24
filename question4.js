/*
Implementation of question 4 of the course careers javascript 
practice problems
*/

const target = "coursecareers"
const delimiter = "|"
const spacing = "1"

let res = ""
for (let i = 0; i < target.length; i++) {
    // we want to add to our res when current idx is divisible by
    // spacing and in the case that spacing is 1 we don't want the
    // delimiter to be the first character of the string
    if (i % spacing == 0 && i != 0) {
        res += delimiter
    }
    res += target[i]
}

console.log(res)