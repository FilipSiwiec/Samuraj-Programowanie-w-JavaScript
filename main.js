document.body.style.height = 10000 + "px";
const divek = document.createElement("div");
divek.style.width = 100 + "%";
divek.style.position = "fixed";
divek.style.left = 0;
divek.style.top = 0;
divek.style.backgroundColor = "green";

let zmienna = true;

let size = 90;
divek.style.height = size + "px";

document.body.appendChild(divek);

const changeHeight = function(){
    console.log("!");
    

    if (size >= window.innerHeight/2){
        zmienna = false;
        console.log("zmienna")
    }

    if (size <= 0) {
        zmienna = true;
        divek.style.backgroundColor = "green";
    }

    if ( zmienna){
        size += 10;
        divek.style.height = size + "px";
    }

    else {
        size -= 10;
        divek.style.height = size + "px";
        divek.style.backgroundColor = "red";
    }
}

window.addEventListener("scroll", changeHeight);