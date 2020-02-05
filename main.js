const btn = document.querySelector("button");
const list = document.querySelector("ul");
number = 1;

const addLi = function() {
    const li = document.createElement("li");
    li.textContent = number;
    list.appendChild(li);
    console.log("!");
    if ( number % 3 == 0 ){
        li.classList = "big";
    }
    number += 2;
}

btn.addEventListener("click", addLi);