//coerciones implicitas 
//maneja os valores como se le acomode

var a = 4 + "7" //regresa un string
var b = 4 * "7" //28
console.log(a, b)

//coerciones explicitas
//cambios de tipos de datos

var a = 20
var b = a + ""
console.log(b, typeof(b))
var c = String(a)
console.log(c, typeof(c))
vard = Number(c)
console.log(d, typeof(d))

//hay que verificar lo que nos regresa JS porque no siempre será lo que esperamos