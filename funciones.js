// Las funciones son un conjunto de sentencias que nosotros utilizamos para generar ciertas acciones con las variables, y regresar algo.

// Declarativas
// Se declara con la palabra reservada function y le damos un nombre y toda función viene con su parámetro

function miFuncion(){
    return 3;
}

miFuncion();


// Expresivas
// Denominamos una función expresiva a una variable que guarda una función 
// a esta función se le llama también función anónima y por lo tanto propiamente la función no tiene nombre

var miFuncion = function(){
    return a + b;
}

miFuncion();


function sumar (a, b){
    var resultado = a + b;
    return resultado;
}

// Y asi usaria la funcion 
// sumar (3, 8)
