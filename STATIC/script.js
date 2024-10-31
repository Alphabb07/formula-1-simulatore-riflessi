console.log("Javascript è stato caricato correttamente")

let countdown = 3;
let timer = document.querySelector("#timer")
let GAS = document.querySelector("#GAS")
let inizio;
let fine;
let risultato;
let reflex;

function aggiornacolore(){
if(countdown === 3){
    document.body.classList.remove('red', 'yellow','green');
    document.body.classList.add('red');
    } else if (countdown === 2){
        document.body.classList.remove('red');
        document.body.classList.add('yellow');
    } else if  (countdown === 1){
        document.body.classList.remove('yellow');
        document.body.classList.add('green');
        }




}












function conteggio(){
if (countdown  > 0){
    timer.textContent = countdown;
    aggiornacolore();
    countdown = countdown - 1;
    setTimeout(conteggio, 1000);
    GAS.disabled = true;



} else {
timer.textContent = "VIA!";
inizio = new Date().getTime();
GAS.disabled = false;
document.body.classList.remove('red', 'green','yellow');
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
GAS.disabled = true;



}


})


conteggio();    