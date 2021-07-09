//Importando os livros criados no arquivo database, 
//apos utilizar o comando export no outro arquivo.
const livros = require('./database')

//console.log(livros)

//Pegamos todas as funções que a biblioteca readline disponibiliza.
//Isso apos rodarmos o codigo de instalação da biblioteca.
const readline = require('readline-sync')

let sair = true;
//executa o programa enquanto o usuario não falar que quer sair
while (sair == true) {

    //Utilizando o question do modulo readline, 
    //neste caso ele pega o que o usuario digitar e salva na variavel.
    const entradaInicial = readline.question('\nDeseja buscar um livro? S/N: ')

    //Se for sim, mostra categorias disponiveis, pergunta qual categoria ela escolhe.
    //Se não, mostra todos os livros em ordem crescente pela quantidade de paginas.
    if (entradaInicial.toLocaleUpperCase() === 'S') {
        console.log('\nEssas são as categorias disponiveis: ')
        console.log('produtividade e estilo de vida', '/Historia Brasileira', '/Americas', '/produtividade e estilo de vida', '/2 Guerra', '/mitologia')
        
        const entradaCategoria = readline.question("\nQual categoria voce escolhe: ")
        
        //percorre todos os livros e retorna apenas os livros que tiverem a categoria de entrada
        const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

        if (retorno[0] == undefined) {
            console.log("\nVocê digitou uma categoria que não tem livros.")
        } else {
            console.table(retorno)
        }

    } else {

        const desejaImprimirTodos = readline.question('\nDeseja imprimir todos os livros? S/N: ')

        if (desejaImprimirTodos.toLocaleUpperCase() === 'S') {
            //Faz a ordenação dos livros pelas paginas.
            const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)

            console.log('\nEsses são todos os livros disponiveis: ')
            console.table(livrosOrdenados)
        }    
    }
    
    //Adiciona um livro na execução local(não altera o arquivo database.js)
    const querAdclivro = readline.question('\nDeseja Adicionar um livro? S/N: ')
    if (querAdclivro.toLocaleUpperCase() == 'S') {
        const nome = readline.question('\nDigite o nome do livro: ')
        const autor = readline.question('Digite o autor do livro: ')
        const categoria = readline.question('Digite a categoria do livro: ')
        const paginas = parseInt(readline.question('Digite a quantidade de paginas do livro: '))
        const recomenda = readline.question('Recomenda esse livro? S/N ') == 'S' ? true : false;
        const jaLeu = readline.question('Já leu esse livro? S/N ') == 'S' ? true : false;
        
        const objeto = {
            id: livros.length,
            nome: nome,
            autor: autor,
            categoria: categoria,
            paginas: paginas,
            recomenda: recomenda,
            leu: jaLeu
        }
        livros.push(objeto)
        console.table(livros)
    }

    //verifica se o usuario quer sair do programa
    const querSair = readline.question('\nDeseja Sair do programa? S/N: ')
    sair = querSair.toLocaleUpperCase() == 'S' ? false : true;
}
