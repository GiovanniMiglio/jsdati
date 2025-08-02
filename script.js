/*let array_1 = [
  ['un', 'per', 'incatenarli.'],
  ['Anello', 'trovarli,'],
  ['ghermirli', 'e'],
  ['gondor', 'mark'],
];

let array_2 = [
  [['trovarli,']],
  ['tu,', 'sciocchi'],
  ['tu,', 'sciocchi', ['padron', 'Sauron']],
  ['nel', ['fuggite', 'gandalf']],
  [['domarli,', 'passare'], 'buio']
];
console.log(array_1 [0][0],array_1 [1][0], array_1 [0][1],array_2 [4][0][0],array_1 [0][0],array_1 [1][0], array_1 [0][1],array_1 [1][1] ,array_1 [0][0],array_1 [1][0], array_1 [0][1],array_1 [2][0], array_1 [2][1],array_2[3][0],array_2[4][1], array_1 [0][2]);*/

//esercizio2

function tiridadi() {
    let tiri = prompt("quani tiri vuoi fare?")
    if (tiri <= 0) {
        console.log("inserisci un numero valido di tiri");
        return;
        
    }
   
    let punti1 = 0;
    let punti2 = 0;
    for (i = 0; i < tiri ; i++) {
        let tiro = Math.floor(Math.random() * (6 - 1) + 1);
        let tiro2 = Math.floor(Math.random() * (6 - 1) + 1);
        punti1 += tiro;
        punti2 += tiro2;
       console.log(`Player 1 ha fatto ${punti1}punti`,`Player 2 ha fatto ${punti2}punti` );
       
    }
   
    
    if(punti1 > punti2){
        console.log("Player 1 ha Vinto");
        
    }else if(punti1 < punti2){
        console.log("Player 2 ha Vinto");
        
    }else{
        console.log("Pareggio");
        
    }
}

    tiridadi()