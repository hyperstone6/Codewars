// Write a function that takes a list of strings as an argument and 
//returns a filtered list containing the same elements but with the 'geese' removed.


// My solutions

// solution 1 -- filter method
function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => !geese.includes(bird))
};

// Solution 2 -- for loop
function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let newBirds = []
    for(let i = 0; i < birds.length; i++) {
        if(!geese.includes(birds[i])) {
            newBirds.push(birds[i])
        }
    }
    return newBirds
  };