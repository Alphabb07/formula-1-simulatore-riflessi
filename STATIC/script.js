console.log("Javascript è stato caricato correttamente")

let countdown = 3;
let timer = document.querySelector("#timer")
let GAS = document.querySelector("#GAS")
let inizio;
let fine;
let risultato;
let reflex;

function conteggio(){
if (countdown  > 0){
    timer.textContent = countdown;
    countdown = countdown - 1;
    setTimeout(conteggio, 1000);
    GAS.disabled = true;



} else {
timer.textContent = "VIA!";
inizio = new Date().getTime();
GAS.disabled = false;

    
}
}

GAS.addEventListener("click", function() {
if (inizio) {
fine = new Date().getTime();
reflex = fine - inizio;
risultato = ( reflex + " ms");
timer.textContent = "";
inizio = null;
console.log("Risultato: " + risultato);
timer.textContent = ("Il tuo risultato e': " +risultato);



}


})


conteggio();    