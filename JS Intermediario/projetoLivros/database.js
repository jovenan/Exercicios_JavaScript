//DataBase de livros
const livros = [
    {
        id: 1,
        nome: "Digital Minimalism",
        autor: "Cal Newport",
        categoria: "produtividade e estilo de vida",
        paginas: 254,
        recomenda: false,
        leu: false
    },{
        id: 2,
        nome: "O Genocidio do negro brasileiro",
        autor: "Abdias do Nascimento",
        categoria: "Historia Brasileira",
        paginas: 254,
        recomenda: false,
        leu: false
    },{
        id: 3,
        nome: "As veias abertas da america latina",
        autor: "Eduardo galeano",
        categoria: "Americas",
        paginas: 400,
        recomenda: true,
        leu: true
    },{
        id: 4,
        nome: "Quem pensa enriquece",
        autor: "Napoleon hill",
        categoria: "produtividade e estilo de vida",
        paginas: 368,
        recomenda: true,
        leu: true
    },{
        id: 4,
        nome: "Diario de Anne Frank",
        autor: "Anne Frank",
        categoria: "2 Guerra",
        paginas: 68,
        recomenda: true,
        leu: true
    },{
        id: 5,
        nome: "O ladrão de raios",
        autor: "Ficticio",
        categoria: "mitologia",
        paginas: 350,
        recomenda: false,
        leu: true
    }
]

//Utilizado para podermos exportar o arquivo
module.exports = livros