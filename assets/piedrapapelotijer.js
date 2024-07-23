var jugadas = prompt(`cuantas veces quieres jugar?`)
var jugadorwin= 0;
var pcwin = 0;
for (var i = 1 ; i <= jugadas ; i = i + 1){

   var jugador = prompt("piedra , papel o tijera?")
   if (jugador == `piedra`) {
       jugador = 0
   } else if (jugador == `papel`) {
       jugador = 1
   } else {
       jugador = 2
   }

   var computador = Math.floor(Math.random()*3)
    
if (computador == 0 && jugador == 1 ||computador == 1 && jugador == 2 || computador == 2 && jugador == 0){
      console.log(`Felicidades! eres el ganador`);
      jugadorwin = jugadorwin + 1;
      
} else if (computador == jugador) {
   console.log (`es un empate`)
} else
    console.log (`el ganador es el computador`)
   pcwin = pcwin +1
}
console.log(jugadorwin);
console.log(pcwin)