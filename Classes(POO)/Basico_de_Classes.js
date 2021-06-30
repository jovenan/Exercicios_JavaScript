//Criação de uma classe para livros
class Book {
    //instanciado o metodo construtor para criar os objetos
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    //Cria uma função chamada read(Ler)
    read() {
        return `Estou lendo ${this.title}`
    }
}

let book = new Book('Algoritmos para viver', 'Brian', 500);
console.log(book)
console.log(book.read())

let otherBook = new Book('Um exu em nova yourk', 'cidinha', 100)
console.log(otherBook)

console.log(book, otherBook)


//Criando uma classe com Herança de outra
class ITBook extends Book {
    constructor(title, author, pages, technology) {
        //puxa os atributos criados na outra classe
        super(title, author, pages);
        this.technology = technology;
    }
}

let itBook = new ITBook('Um exu em nova yourk', 'cidinha', 100,"algoritmos")
console.log(itBook)

//Encapsulamento em POO no JS
class Person {
    constructor(name) {
        //deixando ela "privada", mas ela não fica totalmente privada
        this._name = name;
    }
    //Criando getter
    get name() {
        return this._name
    }
    //Criando setter
    set name(value) {
        this._name = value;
    }
}

let person = new Person("Jonatas")

//Não conseguiremos acessar o nome pois ele foi encapsulado, 
//apenas conseguiremos se o metodo 'get' for criado.
console.log(person.name)

//utilizando o setter
person.name = "Jo"