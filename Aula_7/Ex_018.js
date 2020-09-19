let num = [9,5,1,2,3,4]

//mostra vetor inteiro
console.log(num)

//mostra tamanho do vetor
console.log(num.length)

//ordena vetor
num.sort()
console.log(num)

//mostra todos vetores
for (let pos = 0; pos < num.length;pos++) {
    console.log(num[pos])
}

//forma simplificada
for (let pos in num) {
    console.log(num[pos])
}

//busca indice do vetor
console.log(num.indexOf(9))

