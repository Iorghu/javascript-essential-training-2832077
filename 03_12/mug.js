class Mug {
  constructor(name, volume, color, content) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.content = content;
    this.typeOfContent = "Coffee";
  }
  isEmpty() {
    return this.content === 0;
  }
  status() {
    // if (this.isEmpty) return "empty"; // method was not called, but function was always true.
    if (this.isEmpty()) return "empty"; // doing a git amend
    if (!this.isEmpty) console.log("!this.isEmpty is truthy");
    if (this.isEmpty) console.log("this.isEmpty is truthy");
    if (this.content == this.volume) return "full";
    return "not empty";
  }
}

export default Mug;
