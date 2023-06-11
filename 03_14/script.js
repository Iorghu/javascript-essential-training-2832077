/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const book1 = new Book("ABC", 26, 200, "S-Tier");
console.log(book1);
const book2 = new Book("CDE", 26, 200, "A-Tier");
console.log(book2);
const book3 = new Book("451", 451, 451, 451);
console.log(book3);
const book4 = new Book("Fake", "Fake", "Fake", "Fake");
console.log(book4);
const book5 = new Book("4321", 890, 700, "Super");
console.log(book5);
