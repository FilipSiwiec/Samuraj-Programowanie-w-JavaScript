const slider = [{
    img: "images/img1.jpg",
    text: "pierwszy tekst",
},
{
    img: "images/img2.jpg",
    text: "drugi tekst",
},
{
    img: "images/img3.jpg",
    text: "trzeci tekst", 
}]

let time = 3000;
let active = 0;

const img = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");

const funkcja = () => {
    active++;
    if (active === slider.length) {active = 0};
    img.src = slider[active].img;
    h1.textContent = slider[active].text;
}

setInterval(funkcja, time)