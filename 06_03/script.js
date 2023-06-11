/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

headingColor();
document.querySelector(".right").style.backgroundColor = color; // why is the right box now green?
document.querySelector(".right .color-value").innerHTML = color;

function headingColor() {
    color = "blue";
    document.querySelector(".title").style.color = color;
    
    let color = "red";
}

