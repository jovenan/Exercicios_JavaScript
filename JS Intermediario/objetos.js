const pessoa = {
    nome: "Jonatas",
    idade: 20,
    cidade: "SP"
}

//formas de visualizar os dados
console.log(pessoa.nome)
console.log(pessoa["nome"])

console.log("---------------------------------")

//Destructuring
//Desestruturando objetos
const {nome, idade, cidade} = pessoa

//Dessa maneira não é necessario passar o nome do objeto,
//Apenas passando o atributo do objeto
console.log(cidade)