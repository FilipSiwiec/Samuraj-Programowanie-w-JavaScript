let p = document.querySelector("p");

document.body.addEventListener("mousemove", (e) => {
    console.log("dziala");

    p.textContent = `${e.clientX}, ${e.clientY}`;

    document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY} ,100)`;
})