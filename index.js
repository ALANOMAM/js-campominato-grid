/* 
Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata 
si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità

Bonus:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe
*/


let pulsante = document.querySelector("#btn")
let num 

pulsante.addEventListener("click", function(){

    let griglia = document.querySelector("#grid")
    let livelli = document.querySelector("#levels")
   
    //mi resetta la tabella ogni volta che premo "gioca" cosi le tabelle non si aggiungano una sotto l'altra quando cambio livelli di difficolà
     griglia.innerHTML=""

 // mi cambia il numero di scatole a disposizione a seconda del livello     
if(livelli.value == "level1"){
     num = 100
     
}else if(livelli.value == "level2"){
    num = 81
}else{
  num=49
}
   

for(let i=0; i<num;i++){
    //creo i vari div   
   let scatole = document.createElement("div")
  
   //STILE PER LE SCATOLE DENTRO IL MIO GRID
   //collego la classe box ad ogni scatola per avere una prima stilizazione
   scatole.classList.add("box")
   
   //aggiungo anche le classi "easy" "medium" o "hard" alle mie scatole a seconda del livello 
   if(livelli.value == "level1"){
     scatole.className += " easy"  
  }else if(livelli.value == "level2"){
    scatole.className += " medium"
  }else{
    scatole.className += " hard"
  }

   
   //aggiungo i numeri dentro le scatole
   scatole.innerHTML = (i+1)
   
   // aggiungo event listener che mi identifica la box cliccata, fa cambiare backgroud e mi manda un messaggio in console
   scatole.addEventListener("click",function(){
   
   console.log("la scatola clisccata è : ",this.innerHTML)
   
   this.classList.toggle("active")
   
   })
   
   
   //appendo le scatole generate al contenitore grid
   griglia.append(scatole)
   
   }

})
