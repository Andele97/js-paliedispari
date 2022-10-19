/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
const el = document.querySelector.bind(document);

const choiseUser =  el('.sceltaUtente');
const numbUser = el('input');
const btn = el('button');
const winner = el('.output');
const outputSomma = el('.outputSomma');

btn.addEventListener('click', function(){

  if(numbUser.value < 1 || numbUser.value > 5){
    winner.innerText = `Il numero inserito non è valido inserisci un numero da 1 a 5`
    return
  }else{
    let pcNumb = randomNumb();
    if(choiseUser.value ===  pariDispari(parseInt(numbUser.value), pcNumb)){
      winner.innerText = 'User vince'
    }else{
      winner.innerText = 'Pc vince'
    }
  }
})

//FUNZIONE

function randomNumb(){
  return Math.floor(Math.random() * 5);
}

function pariDispari(numbUs, numbPc){

  let somma = numbUs + numbPc;
  outputSomma.innerText = `la somma è: ${somma}`
  if(somma % 2 == 0) return 'pari';

  return 'dispari';
}
