//arrays em JS
var alunas = ['Paula','Maria','Estela','Gaby']

console.log(alunas)

// Operador Spread (...NomeArray)
//Adiciona os itens do array anterior na nova array, mais as que eu especificar
var alunasXP = [...alunas, "Simara"]

console.log(alunasXP)

//Metodos de iteração:
for (let i = 0; i< alunasXP.length; i++) {
    console.log(alunasXP[i])
}

console.log("---------------------------------")

//Metodo .map()
//Faz uma iteração em todos itens do array.
//O parametro do map, é uma callback Function,
//Neste exemplo passei uma arrow function
alunasXP.map(aluna => console.log(aluna))

console.log("---------------------------------")

//Filter
//Faz uma iteração em todos itens do array, 
//e retorna os itens que passarem pela condicional.
//O parametro do filter, é uma callback Function,]
//Neste exemplo passei uma arrow function.
var numeros = [34, 45, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero%2 != 0)
const numerosPares = numeros.filter(numero => numero%2 == 0)

console.log(numerosImpares)
console.log(numerosPares)

console.log("---------------------------------")

//Sort
//altera a ordem do array pai.
//Ordena os elementos.
const numerosOrdenadorCrescente = numeros.sort()
console.log(numerosOrdenadorCrescente)

const numerosOrdenadorDecrescente = numeros.sort((a,b) => b-a)
console.log(numerosOrdenadorDecrescente)

console.log("---------------------------------")

//reduce
//Reduz nosso array a um resultado de uma operação matematica.
//Nesse exemplo ele soma todos os itens do array + o ultimo parametro que é 0.
const numbers = [1,34,35]

const soma = numbers.reduce((valorAnterior, ValorAtual) => {
    return valorAnterior + ValorAtual
},0)

console.log(soma)
