const form = document.querySelector("form");
const number = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const list = document.getElementsByClassName("task");

const remove = (e) => {
    e.target.parentNode.remove();
    number.textContent = list.length;
}

const funkcja = (e) => {
    e.preventDefault();
    const inside = input.value;
    if (inside === "")return;
    
    const task = document.createElement("li");
    task.className = "task";
    task.innerHTML = inside + "<button>usun</button>";
    ul.appendChild(task);

    number.textContent = list.length;

    input.value = "";

    task.querySelector("button").addEventListener("click", remove);
}

form.addEventListener("submit", funkcja);