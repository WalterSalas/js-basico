var fruta = ["Manzanas", "Platanos", "Cerezas", "Fresas"];
//Generamos una variable con un array

console.log(fruta);
// regresa = (4) ["Manzanas", "Platanos", "Cerezas", "Fresas"]

console.log(fruta.length);
// regresa = 4

console.log(fruta[0]);
// regresa = Manzanas

var masfrutas = frutas.push("Uvas");
//Usamos push para agregar un elemento nuevo al final del array

var ultimo = fruta.pop();
//quita el ultimo y lo mete en una variable

fruta.pop();
//solo quita el ultimo y no lo guarda en ningun lado

var inicio = frutas.unshift("Naranjas")
//mete un elemento al inicio del array

var borrarInicio = fruta.shift();
//borra el primer elemento del array 

var posicion = fruta.indexOf("Platanos");
//regresa el index del elemento buscado