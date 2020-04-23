Valores: Truthy y Falsy
//falsy
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(NaN)) //not a number
console.log(Boolean(undefined)) //not value yet
console.log(Boolean(false))
console.log(Boolean("")) //empty string

//truthly
console.log(Boolean(" ")) //string con algo
console.log(Boolean("a"))
console.log(Boolean(1)) //any number 
console.log(Boolean({})) //arrays, even if they are empty
console.log(Boolean(function(){})) //functions, even if they are empty