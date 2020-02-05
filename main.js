const box = document.createElement("div");
document.body.appendChild(box);
let size = 100;
box.style.width = size + "px";
box.style.height = size + "px";

let flag = true;


window.addEventListener("scroll", function(){
    
    if ( size >= window.innerWidth / 2  ) {
        flag = false;
    }

    else if ( size == 0 ) {
        flag = true;
    }

    if ( flag ){

        size = size + 10;
        box.style.width = size + "px";
        box.style.height = size + "px";
    }

    else {
        size = size - 10;
        box.style.width = size + "px";
        box.style.height = size + "px";
        console.log("minus")
    }

})
