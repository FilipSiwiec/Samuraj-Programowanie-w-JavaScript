const btn = document.querySelector("button");
const div = document.querySelector("div");

const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja", "Kasia"];

const prefixes = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];

const nameGenerator = () =>{
  const indexP =  Math.floor(Math.random() * names.length );
  const indexS =  Math.floor(Math.random() * prefixes.length );

  div.textContent = `${prefixes[indexS]}, ze najlepsze imię będzie ${names[indexP]}`;
}

btn.addEventListener("click", nameGenerator);