const main = document.querySelector(".main");
const reset = document.querySelector(".reset");
const div = document.querySelector(".time div");

let active = false;
let number = 0;
let Int;

const start = () => {

    if (!active) {
        active = !active;
        main.textContent = "Pauza";
        Int = setInterval(odliczanie, 10);


    }
    else {
        active = !active;
        main.textContent = "Start";
        clearInterval(Int);
    }
}

const resetowanie = () => {
    console.log("reset");
    number = 0;
    div.textContent ="---";
}

odliczanie = () => {
    number++;
    div.textContent = (number / 100).toFixed(2);
    
};

main.addEventListener("click", start);
reset.addEventListener("click", resetowanie);