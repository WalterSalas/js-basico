var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "tv", costo: 5000},
    {nombre: "Libro", costo: 300},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 250},
    {nombre: "Audifonos", costo: 150},
];

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre = "Laptop"
});

//encuentraArticulo traeria solo un valor
//{nombre: "Laptop", costo: 20000}


var articulosBaratos = articulos.some(function(articulos){
    return articulo.costo >= 700
});

//con some el resultado es true o false.