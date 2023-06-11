/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

headingColor();
document.querySelector(".right").style.backgroundColor = color; // why is the right box now green?
document.querySelector(".right .color-value").innerHTML = color;

{
const myConst = "c";
var myVar = "v";
// myConst = 3; // not working
let myLet = "l";
}
// console.log(myConst); // not working
console.log(myVar);
// console.log(myLet); // not working
function headingColor() {
    var color = "red";
    color = "blue";
    console.log(`this.color = ${this.color}, color = ${color}`)
    document.querySelector(".title").style.color = color;
    var insideColor = "black";
}
console.log(color)
// console.log(insideColor);

