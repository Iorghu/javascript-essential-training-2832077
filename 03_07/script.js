const mug = {
  name: "My Coffee Mug",
  volume: 200,
  color: "beige",
  content: 70,
  typeOfContent: "Coffee",
  isEmpty: function () {
    return this.content === 0;
  },
  status() {
    // if (this.isEmpty) return "empty"; // method was not called, but function was always true.
    if (this.isEmpty()) return "empty";
    if (!this.isEmpty) console.log("!this.isEmpty is truthy");
    if (this.isEmpty) console.log("this.isEmpty is truthy");
    if (this.content == this.volume) return "full";
    return "not empty";
  },
};
console.log(mug);
console.log("content of mug:", mug["content"]);
console.log(`${mug.name} is ${mug.status()}`);

const book = {
  title: "How to Create Objects in JavaScript",
  difficulty: "easy",
  numberOfPages: 0o11, // 9
  worthWile: true,
};
console.log(`my favorite book is: ${book.title}`);
console.log(`my favorite book is not: ${book}`);
