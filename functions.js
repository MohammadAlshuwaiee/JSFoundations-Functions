/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
// function greet(name) 

function greet(Name) {
  
  console.log(`Hello ${Name}`);
return Name

}

greet("Mohammad")




// /**
//  * isOdd(n):
//  * - receives a number n
//  * - returns true if it's odd, false otherwise
//  *
//  * e.g.
//  * isOdd(7) -> true
//  * isOdd(10) -> false
//  */
// // function isOdd(n)

function isOdd(n) {

  if (n % 2 ===1) {
    return n
      console.log(true)
    }
    else{
      return n
      console.log(false)
    }
}

isOdd(8)

// isOdd(7)

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
  function  oddsSmallerThan(n) {
  if (n % 2 == 0 ||n % 2 == 1)
  return parseInt (n/2);
  }
console.log(oddsSmallerThan(7))

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
// function squareOrDouble(n) {

function squareOrDouble (i) {
    let result = 0;
    if (i % 2 ==0){
        result = i + i;
        return result;
    }
    else if (i % 3 ==0) {
        result = i * 2;
        return result;
    }
}
console.log(squareOrDouble(21))

 module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
