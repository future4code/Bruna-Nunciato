// // // ----------------------> Exercicio 1 <---------------------------
// a cada vez que o loop é feito a variável i ganha +1 ,
// e variavel valor soma esse valor de i mais(+) o que valor ja tinha antes, 
// esse o loop só para enquanto i for menor que 5. 
// parando o loop ele passa pra linha onde pede para imprimir valor , que é o total que ele (valor) somatizou.
// // // ----------------------> Execicio 2 <---------------------------
// a) serão impressos os numeros maiores que 18.
// b) sim o for of acessa todos os elementos.  
// um array e uma condition para acessar os elementos da array cada vez que faz o loop.

// ---------------> Exercícios de escrita de código <--------------------
// ----------------------> Exercicio 3 <---------------------------
let arrayoriginal = [23, 45, 67, 87, 24, 56, 68, 12, 55, 89, 123, 562, 785, 90]
// a)
// for( i=0; i < arrayoriginal.length; i++){
// console.log(arrayoriginal[i])
// }

// b)
// for (let i of arrayoriginal){
//    i =i/10
//     console.log(i)
// }
// c)
// let lista =[]

// for (let i of arrayoriginal){
//     if (arrayoriginal % 2 === 0){
//    lista.push(i)
//     }
// }
// console.log(lista)
// d)
// let numero= 0

//  for( i=0; i< arrayoriginal.length; i++){
//     numero = arrayoriginal[i]
//     console.log (`O elemento do index ${i} é ${numero}`)
// }
// e)

let valormaior = 0
let valormenor = Infinity

for (let i of arrayoriginal){
    if (arrayoriginal[i] > valormaior ){
        valormaior = arrayoriginal[i]
}   
}

for (let i of arrayoriginal){
    if (i < valormenor){
        valormenor = i
    }
}

console.log(`O numero maior é ${valormaior} e o menor é ${valormenor}.`)
