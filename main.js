const text = document.querySelector(".text");
const pionowa = document.querySelector(".kursor");
const Lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, est? Recusandae, nobis? Reprehenderit facilis saepe eius a minus assumenda, officiis recusandae culpa ipsum sint perferendis numquam doloribus repudiandae veniam. Temporibus? KONIEC";

const time = 40;
let number = 0;

const funckcjaNasza = () =>{
    text.textContent += Lorem[number]
    number++;
    if (number === Lorem.length) clearInterval(waly);
}

const waly = setInterval(funckcjaNasza, time);

const klawisz = () =>{
    pionowa.classList.toggle("active");
}

setInterval(klawisz, 400)