// instrucciones de flujo de dato
// if = switch
// if(condicional){
// bloque de instrucciones
// }
// el if me permite indicar que algo se va a ejecutar siempre y cuando se cumpla una condicion

// solocitar la edad de una persona para saber si es mayor de edad
var edad = prompt("ingrede su edad")
edad = parseint(edad)
if(edad >= 18){
console.log(`la  edad ${edad} corresponde a mayor de 18`)
}
// en base a dos colores, rojo y verde, indicar cual es el favorito de un usuario
var colorfavorito  = prompt("ingrese su color favorito (rojo o verde)")
if (colorfavortio == "rojo"){
    console.log("el color favorito es rojo")
}else{
    console.log("el color favorito es verde")
}
// en base a tres colores: roo, verde y amarillo, indicar cual es el favorito del usuario
//  if else if
var colorfavorito = prompt("ingrese su color favorito (rojo, verde, amarillo)")
if (colorfavorito == "rojo") {
console.log("el clor favorito es rojo");
} else if (colorfavorito == "verde") {
    console.log("el clor favorito es verde")
}else {
    console.log(" el color favorito es amarillo")

}

// anidacion de if

if (true){
    if (true){

    }
}

// en base a tres colores: roo, verde y amarillo, indicar cual es el favorito del usuario
var colorfavorito = prompt("ingrese su color favorito (rojo, verde, amarillo)")
switch (colorfavorito) {
    case `rojo`:
        console.log(`el color favorito es rojo`)
        break;
    case `verde`:
        console.log(`el color favorito es verde`)
        break;
    default:
        console.log(`el color favorito es amariloo`)
        break;
}