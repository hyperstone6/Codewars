// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// Original code:
// function createArray(number){
//     var newArray = [];
    
//     for(var counter = 1; counter <= number;){
//       newArray.push(counter);
//     }
    
//     return newArray;
// }


// My solutions

// Solution 1 -- simple fix
function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    return newArray;
}

// Solution 2 -- refactor with spread syntax and map method
function createArray(number){
    return newArray = Array(...Array(number)).map((item, idx) => item = idx + 1)
}

// Solution 3 -- refactor with while loop
function createArray(number){
    let result = []
    let i = 1
    while(number > 0) {
        result.push(i)
        i++
        number--
    }
    return result
}