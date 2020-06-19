const funkcja = (e) => {
    e.target.remove();
}

document.querySelectorAll("li").forEach( item => item.addEventListener("click", funkcja));