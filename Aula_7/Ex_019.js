//FUNCOES


function parimpar(num) {
    if (num % 2 == 0) {
        return "par"
    } else {
        return "impar"
    }
}

console.log(parimpar(11))

function soma(n1=0,n2=0) {
    return n1 + n2
}

console.log(soma(29,17))
console.log(soma(12))

let v = function(x) {
    return x*2
}

console.log(v(2))

function fatorial(num) {
    let fat = 1
    for (let c = num; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

function fatorial1(num) {
    if (num == 1) {
        return 1
    } else {
        return num * fatorial1(num-1)
    }
}

console.log(fatorial1(5))

