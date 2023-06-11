console.log("Hello World!");

function funcByDeclaration() {
  console.log("Hello Declaration function!");
  const myMain = document.querySelector("main");
  const myHeader = document.createElement("h1");
  myHeader.innerText = "Testing different functions";
  myMain.append(myHeader);
}
funcByDeclaration();

const funcByExpression = function () {
  console.log("Hello Expression function!");
  const myHeader = document.querySelector("main h1");
  myHeader.style.color = "darkgreen";
  console.log(myHeader.hasAttribute("alt"));
};
funcByExpression();

// const expressionByArrow = () => console.log("Hello Arrow"); // so eine Zeile würde auch funktionieren
const expressionByArrow = () => {
  console.log("Hello Arrow");
  const mySubheader = document.createElement("h2");
  mySubheader.innerText = "Also testing arrow-Functions";
  mySubheader.style.color = "green"
  document.querySelector("main").append(mySubheader);
};
expressionByArrow();
