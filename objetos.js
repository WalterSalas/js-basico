var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    color: "Rojo",
    annio: 2020,
};

//Asi se crea un objeto en javascript 
//Para acceder a una propiedad especifica usaremos el nombre del objeto y un punto seguido de la propiedad
// miAuto.marca nos devolveria "Toyota"



var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    color: "Rojo",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`El Auto es: ${this.marca} ${this.modelo} ${this.color} ${this.annio}`)
    }
};

//Un objeto puede tener funciones en su interior y se mandarian llamar como miAuto.detallesDelAuto();

