let valores = [4,9,6,2,1]

// Percursso em vetores:
/*
for (let pos=0 ; pos < valores.length ; pos++){
    console.log(`Numero: ${valores[pos]} na posição: ${pos}`)
}
*/

for(let pos in valores) {
    console.log(`Posição: ${pos} , Número: ${valores[pos]}`)
}
