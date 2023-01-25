// Description:

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; 
//and month 11 (November), is part of the fourth quarter.
// Constraint: 1 <= month <= 12

//  My solutions

// Switch statement
function quarterOf(month) {
    if(month < 1 || month > 12) return false
    let result = 0
    switch(true) {
        case month >= 1 && month <= 3:
          result = 1
          break
        case month >=4 && month <= 6:
          result = 2
          break
        case month >= 7 && month <= 9:
          result = 3
          break
        case month >= 10 && month <= 12:
            result = 4
            break
    }
    return result
}

// Math.ceil solution
const quarterOf = (month) => {
    if(month < 1 || month > 12) return false
    return Math.ceil(month / 3)
}