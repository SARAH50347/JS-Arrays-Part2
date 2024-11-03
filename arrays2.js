/**
 * Task1
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

function isArrayLengthOdd(numbers) {
  const sizrOfArray=numbers.length;
      if (sizrOfArray % 2) {
         return true;
      } else {
        return false;
      }
    }
console.log(isArrayLengthOdd([1,2,3,4]));

    

  /**
   * Task2
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
 
   return !isArrayLengthOdd(numbers);
}
console.log(isArrayLengthEven([1,2,3,4]));

/**
 * Task3
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  
  const newInstructore= instructors;
    instructors.push("Laila");

   return newInstructore
    
  }
  //const instructors = ["Mshary", "Hasan"]
  console.log(addLailaToArray(["Mshary", "Hasan"]));

  /**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
 
  const lastTeams = teams.pop(); 

return lastTeams; 

} 
//const teams=["Brazil", "Germany", "Italy"];
console.log (eliminateTeam(["Brazil", "Germany", "Italy"]));

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
if(isArrayLengthEven(fruits)){
  return fruits.slice(fruits.length/2 , fruits.length);
}
}
console.log (secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));


/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> "Taylor Schwift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
 if (shout[shout.length-1] !=="!"){
  return shout;
 }

const shoutWithOnexclamationMark= shout.slice(
  0,
  shout.indexOf("!") + 1
);
return shoutWithOnexclamationMark;
}
console.log(youGottaCalmDown("hello!!!!!!"));