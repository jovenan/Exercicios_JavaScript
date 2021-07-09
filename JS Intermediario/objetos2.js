//Array de Objetos - Bem parecido com o JSON
const filmes = [
    {
        id: 1,
        titulo: "Dilema das redes",
        descricao: "Documentario sobre tecnologia",
        duracao: 120
    },{
        id: 2,
        titulo: "Us",
        descricao: "filme de terror",
        duracao: 130
    },{
        id: 3,
        titulo: "Corra",
        descricao: "Documentario sobre suspense",
        duracao: 110
    }
]

//Desestrutuando esse array de objetos
const [{id, titulo, descricao, duracao}] = filmes

console.log(titulo)

console.log("---------------------------------")

console.log("----- Descrições dos filmes -----")
filmes.map(filme => console.log(filme.descricao))

