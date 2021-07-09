const array = [2,6,3,8,9,1]
var pares = []

const arraydobro = array.map((numero) => numero * 2)

array.map((numero) => {
    if (numero % 2 ==0) {
        pares.push(numero)
    }
})

console.log(arraydobro)
console.log(pares)

pares = array.filter((numero) => numero % 2 == 0)
const impares = array.filter((numero) => {
    if (numero % 2 != 0) {
        return numero
    }
})

console.log(pares)
console.log(impares)

var soma = array.reduce((acumulador,numero) => acumulador + numero,1)

console.log(soma)

array.sort()
console.log(array)
