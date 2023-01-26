// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// My solutions

// Solution 1 -- while loop
function repeatStr (n, s) {
    let result = ''
    while(n > 0) {
      result += s
      n--
    }
    return result
}

// Solution 2 -- recursion
function repeatStr (n, s, newStr = '') {
    if(n === 0) return newStr
    newStr += s
    return repeatStr(n - 1, s, newStr)
}

// Solution 3 -- repeat method
function repeatStr (n, s) {
    return s.repeat(n)
}