// // // ----------------------> Exercicio 1 <---------------------------
// Para numeros pares a resposta é Passou no teste.
// para numeros impares , já que o resto seria diferente de 0, Não passou no teste

// // // ----------------------> Execicio 2 <---------------------------
// a) O codígo dá o preço da fruta que for inserida.
// b) O preço da fruta maçã é R$ 2.25
// c) O preço da fruta Pêra é R$ 5.5
// (continuaria lendo o codigo mesmo já sabendo o que imprimir)
// // ----------------------> Exercicio 3 <---------------------------
// a) declarando que a constante é numero que o usuario deve digitar
// b) sendo 10 maior que 0 a mensagem é "esse número passou no teste"
// -10 não é maior que 0, nada deve acontecer
// c) pode haver erro pois o let  mensagem esta dentro do escopo 
// e o console.log solicitando a mensagem esta do lado de fora de onde este foi declarando

// ---------------> Exercícios de escrita de código <--------------------
// ----------------------> Exercicio 4 <---------------------------

// let idadeuser = Number(prompt("qual a sua idade?"))
// let idademinima = idadeuser > 18
// if (idademinima){
//     console.log("Você pode dirigir")}
//     else {console.log("Você não pode dirigir")
// }

// // ----------------------> Exercicio 5 <---------------------------
//  let turno = prompt("Responda: Qual periodo você esta estudando M (matutino) ou V (Vespertino) ou N (Noturno)?")
//  turno = turno.toLowerCase()
//  if (turno === "m" ){
//      console.log ("Bom dia!")
// }    else if (turno === "v"){
//      console.log("Boa Tarde!")
//  }   else if(turno === "n"){
//      console.log("Boa Noite!")
//  }

// // ----------------------> Exercicio 6 <---------------------------
//  let turno = prompt("Responda: Qual periodo você esta estudando M (matutino) ou V (Vespertino) ou N (Noturno)?")
//     turno = turno.toLowerCase()
//      switch (turno){
//      case "m":
//      console.log ("Bom dia!")
//      break
//      case "v":
//      console.log("Boa Tarde!")
//      break
//      case "n":
//      console.log("Boa Noite!")
//  }


// // ----------------------> Exercicio 7 <---------------------------
// let genero = prompt("qual genero de filme você prefere?")
// genero = genero.toLowerCase()
// let valor = Number(prompt("quanto quer pagar pelo ingresso?"))
// if (genero === "fantasia" && valor < 15){
//     console.log("Bom filme!!!")
// }
// else{
//     console.log("Escolha outro filme  :(")

// }

// // ----------------------> Desafio 1<---------------------------
// let genero = prompt("qual genero de filme você prefere?")
// genero = genero.toLowerCase()
// let valor = Number(prompt("quanto quer pagar pelo ingresso?"))


// if (genero === "fantasia" && valor < 15){
//     let snack = prompt("qual snack você prefere pipoca, chocolate, doces?")
//     console.log(`Bom Filme com ${snack}!!`)
// }
// else{
//     console.log("Escolha outro filme  :(")

// }
// // ----------------------> Desafio 2<---------------------------

let nomeuser = prompt("Digite seu nome completo")
nomeuser = nomeuser.toUpperCase()
let tipojogo = prompt("Qual tipo do jogo digite IN para internacional e DO para domestico?")
tipojogo = tipojogo.toUpperCase()
let etapa = prompt("Digite SF para semi-final DT para terceiro lugar ou FI para final")
etapa = etapa.toUpperCase()
let categoria = Number(prompt("Qual a categoria 1, 2, 3 ou 4?"))
let quantidade = Number(prompt("quantos ingressos?"))
let precoingresso
if (etapa === SF && categoria === 1){
precoingresso = 1320.00
}    else if (etapa === SF && categoria === 2){
    precoingresso = 880.00
    }    else if (etapa === SF && categoria === 3){
        precoingresso = 550.00
   }   else if (etapa === SF && categoria === 4){
            precoingresso = 220.00
     }     else if (etapa === DT && categoria === 1){
                precoingresso = 660.00
         }    else if (etapa === DT && categoria === 2){
                    precoingresso = 440.00
          }  else if (etapa === DT && categoria === 3){
                        precoingresso = 330.00
         } else if (etapa === DT && categoria === 4){
                            precoingresso = 170.00
         } else if (etapa === FI && categoria === 1){
                                precoingresso = 1980.00
         } else if (etapa === FI && categoria === 2){
                                    precoingresso = 1320.00
         } else if (etapa === FI && categoria === 3){
                                        precoingresso = 880.00
         } else if (etapa === FI && categoria === 4){
                                            precoingresso = 330.00
                                        }


let localidade
if tipojogo === IN{ 
     localidade = Internacional
    } 
     if else tipodejogo === DO{
     localidade = Nacional
}
let valortotal = quantidade * precoingresso

let ticket 
if quantidade > 1{
    ticket = ingresssos
}    else{
        ticket = ingresso
    }


console.log (`------Sua compra foi de ${quantidade} ${ticket} em nome de ${nomeuser} para o jogo ${tipojogo} da Categoria ${categoria}`)
console.log (`--------------------------------------------- Total a Pagar ${valortotal}------------------------------`)