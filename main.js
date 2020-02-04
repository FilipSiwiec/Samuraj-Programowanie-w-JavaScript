const btn = document.querySelector(".button");
let number = 1;

const add = function () {
    const div = document.createElement("div");
    div.setAttribute('class', 'square');
    div.textContent = number;
    document.body.appendChild(div);
    console.log("?");
    number = number + 1
}

btn.addEventListener("click", add);