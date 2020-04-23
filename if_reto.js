var opciones = {
    0: "piedra",
    1: "tijera",
    2: "papel"
}

var resultado = "";


var jugadaPlayer = prompt("Ingrese piedra, papel o tijera").toLowerCase()


function obtenerJugadaMaquina() {
    var numeroAleatorio = Math.floor(Math.random() * 3);
    var opcionMaquina = opciones[numeroAleatorio];
    return opcionMaquina;
}

var jugadaMaquina = obtenerJugadaMaquina()

function jugar() {
    if ((jugadaPlayer === "piedra" && jugadaMaquina === "tijera") ||
        (jugadaPlayer === "papel" && jugadaMaquina === "piedra") ||
        (jugadaPlayer === "tijera" && jugadaMaquina === "papel")) {
        resultado = "Ganaste";
    } elseif ((jugadaPlayer === "tijera" && jugadaMaquina === "piedra") ||
        (jugadaPlayer === "piedra" && jugadaMaquina === "papel") ||
        (jugadaPlayer === "papel" && jugadaMaquina === "tijera")) {
        resultado = "Perdiste";
    } elseif ((jugadaPlayer === "piedra" && jugadaMaquina === "piedra") ||
        (jugadaPlayer === "papel" && jugadaMaquina === "papel") ||
        (jugadaPlayer === "tijera" && jugadaMaquina === "tijera")) {
        resultado = "Empataste";
    } else {
        resultado = "Ingrese opción válida"
    }

    return resultado;
}

console.log(`Tu opción elegida es: ${jugadaPlayer}`)
console.log(`La opción de la máquina es: ${jugadaMaquina}`)
console.log(jugar())