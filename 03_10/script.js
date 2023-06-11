/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
console.log("At Start of script.js");
const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

const testObject = {};
console.log(testObject);

console.log("before imports");
import Backpack from "./Backpack.js";
console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);


// const hmmmug = new MyMug(3234234324); // produces Uncaught ReferenceError
class MyMug { // declaration of MyMug has indeed to be above initialization
  constructor(volume){this.volume = volume}
}

const myMug = new MyMug(200);
console.log(myMug);

// next Line is prohibited by Lint?
// MyMug = 3;
