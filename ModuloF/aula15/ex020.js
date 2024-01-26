let num = [7,5,6,4]
num.push(8)
/*
num.push(7) // Adiciona valores a um array.
num.lenght // Saber o tamanho do array.
num.sort() // Vai pegar todos os valores do vetor e colocar os elementos em ordem crescente.
*/

num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(`O terceiro valor do vetor é ${num[2]}`)
console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(8)

if ( pos == -1 ){ 
    console.log('O valor não foi encontrado')
} else {
console.log(`O valor 8 está na posição ${pos}`)
}