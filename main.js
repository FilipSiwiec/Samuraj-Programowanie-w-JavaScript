const tablica = [];

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const number = document.querySelector("h1 span");
const dodane = document.getElementsByClassName("task");

const remove = (e) => {
    e.target.parentNode.remove();
    number.textContent = dodane.length;
    console.log(tablica);
    const index = e.target.parentNode.dataset.key;
    tablica.splice(index, 1);
    renderList();
}

const funkcja = (e) => {
    e.preventDefault();
    const inside = input.value;
    if (inside === "") return;

    const task = document.createElement("li");
    task.className = "task";
    task.innerHTML = inside + "<button>usun</button>";
    ul.appendChild(task);

    tablica.push(task);
    console.log(tablica);

    number.textContent = dodane.length;

    input.value = "";
    task.querySelector("button").addEventListener("click", remove)
    renderList();
}

const renderList = () => {
    ul.textContent = "";
    tablica.forEach((elem, key) => {
        elem.dataset.key = key;
        ul.appendChild(elem);
    })
}

form.addEventListener("submit", funkcja);