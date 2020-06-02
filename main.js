const gamesChoices = {
    handChoice: "",
    aiChoice: "",
}

const stats = {
    gameNumbers: 0,
    winings: 0,
    losses: 0,
    draws: 0, 
}

let czlowiek = gamesChoices.handChoice;
let komputer = gamesChoices.aiChoice;

const hands = [...document.querySelectorAll(".select img")];

hands.forEach( hand => hand.addEventListener("click", 
function(){
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = '0 0 0 4px red';
    czlowiek = this.dataset.option;
}));

function guzik (){
    if (!czlowiek) return alert("Wybierz opcję!!!");
    else if( czlowiek ){
        document.querySelector('[data-summary="your-choice"]').textContent = czlowiek;
        komputer = hands[Math.floor(Math.random()*3)].dataset.option;
        document.querySelector('[data-summary="ai-choice"]').textContent = komputer;

        if(czlowiek === komputer){
            document.querySelector('[data-summary="who-win"]').textContent = "remis!";
            document.querySelector('[data-summary="who-win"]').style.color = "grey";

            document.querySelector(".draws span").textContent = ++stats.draws;
        }
        else if((czlowiek === "papier" && komputer === "kamień") || (czlowiek === "kamień" && komputer === "nożyczki") || (czlowiek === "nożyczki" && komputer === "papier")){
            document.querySelector('[data-summary="who-win"]').textContent = "wygrana!";
            document.querySelector('[data-summary="who-win"]').style.color = "red";

            document.querySelector(".wins span").textContent = ++stats.winings;
        }
        else{
            document.querySelector('[data-summary="who-win"]').textContent = "przegrana...";
            document.querySelector('[data-summary="who-win"]').style.color = "green";

            document.querySelector(".losses span").textContent = ++stats.losses;
        }

        document.querySelector(".numbers span").textContent = ++stats.gameNumbers;
        
    }

    hands.forEach(hand => hand.style.boxShadow = "");
    czlowiek = "";

}

document.querySelector(".start").addEventListener("click", guzik)

