// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.

// My solutions 

// Solution 1
function invert(array) {
    let arr = []
     for(let num of array) {
       arr.push(num * -1)
     }
    return arr
}

// Solution 2 -- map method
function invert(array) {
    return array.map(num => num * -1)
}