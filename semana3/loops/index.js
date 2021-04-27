// // // ----------------------> Exercicio 1 <---------------------------
// a cada vez que o loop é feito a variável i ganha +1 ,
// e variavel valor soma esse valor de i mais(+) o que valor ja tinha antes, 
// esse o loop só para enquanto i for menor que 5. 
// parando o loop ele passa pra linha onde pede para imprimir valor , que é o total que ele (valor) somatizou.
// // // ----------------------> Execicio 2 <---------------------------
// a) serão impressos os numeros maiores que 18.
// b) sim o for of acessa todos os elementos.  
// um array e uma condition para acessar os elementos da array cada vez que faz o loop.

// // // ----------------------> Desafio<---------------------------
// O resultado seria igual ao numero de linhas digitado, pois a condição é 
// enquanto for menor que a linha digitada o loop vai adicionando mais um , 
// então se parar no 3 e o que for digitado foi 4 ele adiciona um e entrega o resultado.

// ---------------> Exercícios de escrita de código <--------------------
// ----------------------> Exercicio 3 <---------------------------
// let arrayoriginal = [23, 45, 67, 87, 24, 56, 68, 12, 55, 89, 123, 562, 785, 90]
// // a)
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

// let valormaior = 0
// let valormenor = Infinity
// let = 0

// for (i of arrayoriginal){
//     if (i > valormaior ){
//         valormaior = i
// }   else if (i < valormenor){
//         valormenor = i
//     }
// }

// console.log(`O numero maior é ${valormaior} e o menor é ${valormenor}.`)

// ---------------------- Desafio 1  ----------------------------

// const escolhido = Number(prompt("Jogador 1: Escolha um número "))
// console.log(`-----------------Vamos Jogar--------------------`)
// let tentativa 
// let tentativas =[]
// tentativa = Number(prompt("Jogador 2: Qual o número escolhido?"))
// while (tentativa !== escolhido){
//     tentativas.push(tentativa)
//     if (tentativa < escolhido){
//     tentativa = Number(prompt(`O número escolhido é maior que ${tentativa}, tente novamente`))
// } else if (tentativa > escolhido){
//     tentativa = Number(prompt(`O número escolhido é menor que ${tentativa}, tente novamente`))
// }
// }

// console.log(`--------Parabéns você acertou, o número escolhido é ${escolhido} !!!!!`)
// console.log(`Você tentou todos esses numeros ${tentativas}`)

// ---------------------- Desafio 2  ----------------------------

const geradordenumero = Math.floor(Math.random() * (100 - 0 + 1)) 
console.log(`-----------------Vamos Jogar--------------------`)
let tentativa 
let tentativas =[]
tentativa = Number(prompt("Jogador: Qual o número sorteado de 0 a 100?"))
let sorteado = geradordenumero
while (tentativa !== sorteado){
    tentativas.push(tentativa)
    if (tentativa < sorteado){
    tentativa = Number(prompt(`O número sorteado é maior que ${tentativa}, tente novamente`))
} else if (tentativa > sorteado){
    tentativa = Number(prompt(`O número sorteado é menor que ${tentativa}, tente novamente`))
}
}
if (tentativa === sorteado){
console.log(`--------Parabéns você acertou, o número sorteado é ${sorteado} !!!!!`)
console.log(`Você tentou todos esses numeros ${tentativas}`)
}
// eu gerei uma constante que aleatoriamente escolhe um numero de 0 a 100, 
// coloquei este numero numa variavel , para que não fosse gerado um numero novo a cada vez que entrasse no loop
// não sei que outra forma isso poderia ser feito, sem que sorteasse outro numero no loop.