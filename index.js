/* 
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata 
si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità
*/


let pulsante = document.querySelector("#btn")
let num 

pulsante.addEventListener("click", function(){

    let griglia = document.querySelector("#grid")
    let livelli = document.querySelector("#levels")
   
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
   //aggiungo qualche stile ad ogni scatola nella grid
   scatole.classList.add("box")
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
   
   /*console.log(griglia)*/

})
