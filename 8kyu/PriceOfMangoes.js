// Description:

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), 
//calculate the total cost of the mangoes.

// Examples

// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

// My solutions

// Solution 1 -- Math.floor
function mango(quantity, price){
    let freeMangoes = Math.floor(quantity / 3)
    return price * (quantity - freeMangoes)
}


// Solution 2 -- step by step subtraction
function mango(quantity, price){
    let result = 0
      while(quantity > 0) {
          if(quantity > 1) {
              result += price * 2
              if(quantity > 2) {
                  quantity -= 3
              } else {
                  quantity -= 2
              }
          } else {
              result += price
              quantity -= 1
          }
      }
      return result
}