/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketnumber is:", backpack.pocketNum);
console.log("the pocketNum value as bracket", backpack["pocketNum"]);
const query = "pocketNum";
console.log("the pocketNum value as bracket-query", backpack[query]);
console.log("Strap length L:", backpack.strapLength.left);
console.log(`trying out template string Converter for the ${1}. time`);