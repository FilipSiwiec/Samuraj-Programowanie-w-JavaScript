const div = document.querySelector("div");

let divX = 150;
let divY = 100;

let insertDivX;
let insertDivY;

let drawactive = false;

div.style.left = divX + "px";
div.style.top = `${divY}px`;

div.addEventListener("mousedown", () => {
  div.style.backgroundColor = "grey"
  drawactive = !drawactive;

  insertDivX = e.offsetX;
  insertDivY = e.offsetY;
})

div.addEventListener("mousemove", (e) => {
  if (drawactive) {
    div.style.left = `${divX - 100}px`;
    div.style.top = `${divY - 100}px`;

    divX = e.clientX;
    divY = e.clientY;
  }
})

div.addEventListener("mouseup", () => {
  div.style.backgroundColor = "black";
  drawactive = !drawactive;
})