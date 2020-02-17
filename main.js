let p = document.querySelector("p");
document.body.addEventListener("mousemove", (e => {
// console.log(event.clientX, event.clientY)

p.textContent = `${e.clientX}, ${e.clientY}`;
// p.textContent = e.clientX + "," + e.clientY ;
// p.textContent = `${e.screenX}, ${e.screenY}`;

}))
