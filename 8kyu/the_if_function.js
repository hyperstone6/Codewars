// Description:

// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truthy, func1 should be called, otherwise call the func2.
// Example:

// _if(true, function(){console.log("True")}, function(){console.log("false")})
// // Logs 'True' to the console.


function _if(bool, func1 = () => 'True', func2 = () => 'false') {
    if(bool) {
      return func1()
    } else {
      return func2()
    }
}