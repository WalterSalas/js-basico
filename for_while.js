var estudiantes = ["Maria", "Sergio", "Raul", "Walter"]

function saludar(estudiante){
    console.log(`Hola, ${estudiante}`);
}


while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludar(estudiante);
}

//A diferencia del for, el ciclo while valida una condicion, mientras sea verdadera el ciclo se seguira ejecuntado.
