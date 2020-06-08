const text = document.querySelector(".text");
const Lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, est? Recusandae, nobis? Reprehenderit facilis saepe eius a minus assumenda, officiis recusandae culpa ipsum sint perferendis numquam doloribus repudiandae veniam. Temporibus?";

const time = 40;
let number = 0;

const funckcjaNasza = () =>{
    text.textContent += Lorem[number]
    number++;
    if (number == 239) clearInterval(waly);
}

const waly = setInterval(funckcjaNasza, time);