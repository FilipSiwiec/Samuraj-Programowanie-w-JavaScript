const slider = [{
    img: "images/img1.jpg",
    text: "Pierwszy text" 
},
{
    img: "images/img2.jpg",
    text: "Drugi text"  
},
{
    img: "images/img3.jpg",
    text: "Trzeci text" 
}]

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");


let time = 1000;
let number = 0;

const funkcja = () =>{
    number++;
    if(number === slider.length){
        number = 0;
    }
    image.src = slider[number].img;
    h1.textContent = slider[number].text;

}

setInterval(funkcja, time);