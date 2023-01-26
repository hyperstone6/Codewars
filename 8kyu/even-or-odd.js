// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My solutions:

// Solution 1 -- commonJS
function even_or_odd(number) {
    if(number % 2 == 0) {
      return "Even" 
      } else {
        return "Odd"
      }
  }

//   Solution 2 -- ES2015+
const even_or_odd = (number) => number % 2 === 0 ? "Even" : "Odd"