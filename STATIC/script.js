console.log("Javascript è stato caricato correttamente")

let countdown = 3;
let timer = dcument.querySelector("#timer")
let GaS = document.querySelector("#GAS")
let inizio;

function conteggio(){
if (countdown  > 0){
    timer.textContent = countdown;
    countdown = countdown - 1;
    setTimeout(conteggio, 1000);



} else {
timer.textContent = "VIA!";
inizio = new Date().getTime();

    }
}


conteggio();    