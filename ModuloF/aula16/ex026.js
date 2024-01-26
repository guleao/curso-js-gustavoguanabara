// Recursividade

function fatorar(n){
    if(n == 1) {
        return 1
    } else {
        return n * fatorar(n-1)
    }
}

console.log(fatorar(5))