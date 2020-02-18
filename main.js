const input = document.getElementById("pass");
const div = document.querySelector(".message");

const passwords = ["user", "wiosna", "Ania"];
const messages = ["wyjechalam na zawsze", "Piekna pora roku", "Jakis txt"];

input.addEventListener("input", (e) => {
  div.textContent = "";
  const text = e.target.value;
  // console.log(text);

  passwords.forEach( (password, index) => {
      if( password === text ){
        div.textContent = messages[index];
        e.target.value = "";
      }
  })






})

input.addEventListener("focus", (e)=>{
  e.target.classList.add("active");
})

input.addEventListener("blur", (e)=>{
  e.target.classList.remove("active");
})



// console.log(e.target.value);
  // if ( passwords === e.target.value) {
  //   div.textContent = message;
  //   e.target.value = "";
  // }

  // else {
  //   div.textContent = "";
  // }