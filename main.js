let p = document.querySelector("p");

document.body.addEventListener("mousemove", (e) => {
    // console.log("dziala");
    const x = e.clientX;
    const y = e.clientY;

    const width = window.innerWidth;
    const height = window.innerHeight;


    const red = x / width * 100;
    const green = y / height * 100; 
    const blue =  ((x / width * 100) + (y / height * 100)) / 2;


    p.textContent = `${x}, ${y}`;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}% ,${blue}%)`;
})