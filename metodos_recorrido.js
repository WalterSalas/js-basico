var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "tv", costo: 5000},
    {nombre: "Libro", costo: 300},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 250},
    {nombre: "Audifonos", costo: 150},
];

// Array de objetos

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

 // Filtro articulos con valor y el resultado seria:
        // (3) [{…}, {…}, {…}]
        // 0: {nombre: "Libro", costo: 300}
        // 1: {nombre: "Teclado", costo: 250}
        // 2: {nombre: "Audifonos", costo: 150}
        // length: 3
        // __proto__: Array(0)



var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre
});
// Recorro el array y creo uno nuevo solo con el nombre del articulo
//Resultado seria:
// (7) ["Bici", "tv", "Libro", "Celular", "Laptop", "Teclado", "Audifonos"]
