//  solicitar 10 numeros por pantalla y mostrarlos
// for (inicio ; hasta ; salto){
// bloque de instrucciones
// }

for (var i = 1 ; i <= 10 ; i = i + 1){
    var numero = prompt(`ingresa el ${i}º numero`)
    console.log(`el ${i}º  numero es ` + numero)

}


var limite = parseintprompt(`cuantos nnumero desea ingresar`)
for (var i = 1 ; i <= limite ; i = i + 1){
    var numero = prompt(`ingresa el ${i}º numero`)
    console.log(`el ${i}º  numero es ` + numero)
}