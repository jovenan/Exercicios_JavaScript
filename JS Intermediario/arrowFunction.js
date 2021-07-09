// Maneira comum:

function Sum(a,b) {
    return a + b;
}

console.log(Sum(2,5))

// Arrow Function:

//Estrutura do codigo: (parametros) => retorno da função.
var soma = (num1,num2) => num1 + num2;

var SayHello = (name) => `Hello ${name}`;

var SayHelloWorld = () => "Hello World";

var ParImpar = (number) => {
    if (number % 2 == 0) {
        return 'par';
    } else {
        return 'impar';
    }
}

console.log(soma(2,6))

console.log(SayHello('Jonatas'))

console.log(SayHelloWorld())

console.log(ParImpar(4))