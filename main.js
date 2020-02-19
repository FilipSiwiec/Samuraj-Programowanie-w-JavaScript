let tablica = ["walcz", " przemyś to jeszcze raz"];
const input = document.querySelector("input")
const h1 = document.querySelector("h1");

// DODAJ 
const dodaj = document.querySelector(".add");

const dodajMozliwosci = (e) => {
    e.preventDefault();
    const newName = " " + input.value;

    for (name of tablica) {
        if (name === newName) {
         alert("to już jest!!!!!!");
         return
        }
       }

    // let tablica = ["walcz", "przemyś to jeszcze raz"];
    
    tablica.push(newName);
    console.log (tablica);
    // console.log (input.value);
    input.value = "";
}

dodaj.addEventListener("click", dodajMozliwosci);

// RESET 
const reset = document.querySelector(".clean");

const resetArray = () => {
    
    tablica = [];
    console.log(tablica);
}

reset.addEventListener("click", resetArray);

// Przycisk pokaż odpowiedź
const odp = document.querySelector(".showAdvice");

const odpFunction = () => {
    // console.log("dziala");

    const index = Math.floor(Math.random() * tablica.length);

    const odpowiedz = Math.random(tablica);
    console.log(Math.random(tablica))
    h1.textContent = tablica[index];
}

odp.addEventListener("click", odpFunction);

// alert
const alerT = document.querySelector(".showOptions");

const alertFunction = () =>{
    console.log ("dziala");
    alert(tablica);
}

alerT.addEventListener("click", alertFunction);
