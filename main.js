let size = 10;
let orderElement = 1;

const init = () => {
 // tutaj kod
 console.log('dziala');
 const guzik = document.createElement("button");

 guzik.style.background = 'red';
 guzik.style.width = 100 + "px";
 guzik.style.height = 50 + "px";
 guzik.textContent = "Dodaj 10 elementów listy";
 document.body.appendChild(guzik);  

 const liczby = document.createElement("ul");
 document.body.appendChild(liczby);  

 guzik.addEventListener("click", createLiElements);

 

}

const createLiElements = () => {
 
 
 console.log("tez dziala");

 for ( let i = 1; i < 11; i++ ){
    

    const liczba = document.createElement('li');
    liczba.textContent = "Element nr " + orderElement;
    orderElement++;
    liczba.style. listStyleType= "none";
    document.querySelector("ul").appendChild(liczba);
    liczba.style.fontSize = size + "px";
    size++;
   }

 }

init()