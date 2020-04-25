var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludar (estudiante){
    console.log(`Hola,  ${estudiante}`)
}



for(var i = 0; i < estudiantes.length; i++){
    
    var estudiante = estudiantes[i];
    saludar(estudiante);

}
//forma Tradicional

for(var estudiante of estudiantes){
    saludar(estudiante);
}
//forma Nueva mucho mas limpia para obtener el mismo resultado