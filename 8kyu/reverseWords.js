// Description:

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// My solutions

// Solution 1 -- array conversion
function reverseWords(str){
    const newArr = []
    const arr = str.split(' ')
    for(const word of arr) {
        newArr.unshift(word)
    } 
    return newArr.join(' ')
}

// Solution 2 -- Built-in reverse method
function reverseWords(str){
    return str.split(' ').reverse().join(' ')
}
