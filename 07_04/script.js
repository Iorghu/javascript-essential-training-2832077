/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

// main goal is: go to the mdn-documentation

let someArray = [
  "Money",
  "Division Bell",
  "Education",
  0.3,
  1,
  true,
  "Bike",
  "Astronomy",
];
console.log("initial array:", someArray);
//-------------------------------------------------------------------------
const lastItem = someArray.pop();
console.log(`Popped ${lastItem} from ${someArray}`);
//-------------------------------------------------------------------------
someArray.unshift(lastItem);
console.log("Added the last item back to the array: " + someArray.join(" | "));
//-------------------------------------------------------------------------
console.log(someArray.sort());
console.log(someArray);
//-------------------------------------------------------------------------
const foundItem = someArray.find(function (item) {
  if (item == true) return item;
});
console.log(`Found the following item: ${foundItem}`); // "true is converted to 1"
const foundIndex = someArray.findIndex(function (item) {
  if (item == true) return item;
});
console.log(`${foundItem} found at index ${foundIndex}`)
console.log(`From [${someArray}] spliced out [${someArray.splice(foundIndex,1)}] leading to [${someArray}].`);
console.log(someArray)


