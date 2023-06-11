class Book {
  constructor(title, numberOfPages, weight, quality) {
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.weight = weight;
    this.quality = quality;
  }
  tearOutPages() {
    this.weight--;
  }
}

export default Book;
