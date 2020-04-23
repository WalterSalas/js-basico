
// El scope puede definirse como el alcance que una variable tendrá en tu código. 
// En otras palabras, el scope decide a qué variables tienes acceso en cada parte del código. 
// Existen dos tipos de scope, el scope global y el scope local. 
// A continuación te mostraré un par de ejemplos explicando en qué consiste cada uno de ellos. 


//scope global: acceso en cualquier lugar 
//scope local: acceso solo dentro de la funcion

var firstName = "Walter"

functionshowName () {
  var lastName = "Salas"
  console.log(`${firstName}${lastName}`)
}

showName()
console.log(firstName)

//console.log(lastName) //este solo se vera en el scope de la funcion```