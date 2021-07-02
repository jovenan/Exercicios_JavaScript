// Busca sequencial //
var valores = [5,8,10,22,45,38];

function busca(num) {
    for (i = 0; i < 6; i++) {
        if (num == valores[i]) {
            return i;
        }
    }
    return -1;
}

console.log(busca(45))
console.log(busca(35))


// Busca binaria //
var valoresBin = [5,8,10,22,35,38,40,50,60,70];

function buscaBinaria(num) {
    let inicio, fim;
    let meio;
    inicio = 0;
    fim = 9;
    while(inicio <= fim) {
        meio = parseInt((inicio + fim) / 2);
        if (num == valoresBin[meio]) {
            return meio
        } else {
            if (num > valoresBin[meio]) {
                inicio = meio + 1;
            } else {
                fim = meio - 1;
            }
        }
    }
    return -1;
}
console.log("busca binaria")
console.log(buscaBinaria(35))
console.log(buscaBinaria(70))
