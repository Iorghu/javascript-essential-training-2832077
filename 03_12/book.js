function Book(title, difficulty, numberOfPages, worthwhile) {
  this.title = title;
  this.difficulty = difficulty;
  this.numberOfPages = numberOfPages;
  this.worthWile = worthwhile;
  this.increaseDifficulty = function () {
    if (this.difficulty == "medium") this.difficulty = "hard";
    if (this.difficulty == "easy") this.difficulty = "medium";
    console.log(`new Difficulty equals ${this.difficulty}`);
  };
}

export default Book;
