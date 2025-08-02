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

// function tiridadi() {
//     let tiri = prompt("quani tiri vuoi fare?")
//     if (tiri <= 0) {
//         console.log("inserisci un numero valido di tiri");
//         return;

//     }

//     let punti1 = 0;
//     let punti2 = 0;
//     for (i = 0; i < tiri ; i++) {
//         let tiro = Math.floor(Math.random() * (6 - 1) + 1);
//         let tiro2 = Math.floor(Math.random() * (6 - 1) + 1);
//         punti1 += tiro;
//         punti2 += tiro2;
//        console.log(`Player 1 ha fatto ${punti1}punti`,`Player 2 ha fatto ${punti2}punti` );

//     }


//     if(punti1 > punti2){
//         console.log("Player 1 ha Vinto");

//     }else if(punti1 < punti2){
//         console.log("Player 2 ha Vinto");

//     }else{
    //         console.log("Pareggio");

//     }
// }

//     tiridadi()
// esercizio 3

// function Conta(n) {
//     for (let i = 1; i <=n ; i++) {
//         if (i % 15 === 0) {
//             console.log("FizzBuzz");  
//         } else if (i % 5 === 0){
//             console.log("Buzz")
//         }else if(i % 3 === 0){
//             console.log("Fizz")
//         }else{
//             console.log(i);
//         }
        
//     } 
// }
// Conta(50)
// esercizio 4
function conta(n) {
     if (n < 1 || n > 9999) {
        console.log("Numero troppo grande");
        
        return "error";
        
     }

  let count = 0;
  while (n >= 1) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
  
}
console.log(conta(prompt("inserisci un numero di cui contare le cifre da 1 a 9999")));

