const btn = document.querySelector('button');
const title = document.querySelectorAll('li');
let font = 10;

window.addEventListener('click', function(){
    font++;

    for( let i = 0; i < title.length; i++ ){
        title[i].style.display = "block";
        title[i].style.fontSize = `${font}px`;
       
    };
});
