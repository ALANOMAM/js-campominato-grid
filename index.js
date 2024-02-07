/* 
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata 
si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità
*/

let griglia = document.querySelector("#grid")

for(let i=0; i<100;i++){
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