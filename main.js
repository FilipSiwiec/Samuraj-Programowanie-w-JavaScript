const div = document.querySelector("div");

let divX = 150;
let divY = 100;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let akcja = false;

let insertDivX;
let insertDivY;

div.addEventListener("mousedown", (e) => {
  // console.log("dole");
  div.style.backgroundColor = "grey";
  
  akcja = !akcja;

  insertDivX = e.offsetX;
  insertDivY = e.offsetY;
  console.log(insertDivX,insertDivY);

});

div.addEventListener("mousemove", (e) => {
  // console.log("rusza");

  if(akcja){

  div.style.left = `${divX}px`;
  div.style.top = `${divY}px`;

  divX = e.clientX - insertDivX;
  divY = e.clientY - insertDivY;
}

});

div.addEventListener("mouseup", () => {
  // console.log("gora")
  div.style.backgroundColor = "black";

  akcja = false;
})