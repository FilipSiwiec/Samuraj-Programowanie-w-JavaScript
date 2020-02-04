const btn = document.querySelector("button");
let number = 1;
let activeNumber = 1;

const addDiv = function () {
    const div = document.createElement("div");
    div.textContent = number
    // if ( number % 5 == 0){
    //     console.log("!");
    //     div.className = "circle";
    // }
    if ( activeNumber == 5){
        div.className = "circle";
        activeNumber = 0;
    }
    document.body.appendChild(div);
    console.log("?");
    number++;
    activeNumber++;
}

btn.addEventListener("click", addDiv);