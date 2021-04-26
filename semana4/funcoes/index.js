// // ---------------exercicios de interpretação--------------------
// // -----------------------Exercício 1 ---------------------------
// a) 10
//    50
//==============================================================================================
// b) não apareceria nada, apenas seria guardado os valor correspondentes 

//  // -----------------------Exercício 2 ---------------------------
//  a) Darvas
//  Caio
//  João
//  Paulinha
//  Chijo
//==============================================================================================
//  b) Amanda
//  Caio
//  // -----------------------Exercício 3 ---------------------------
//  Se o numero do array for par ele adiciona o dobro desse valor em arrayFinal.
//  ---------------------------Exercício de Escrita de código --------------------
//  ------------------------------Exercício 4 --------------------------------------
// a)

// function informacaoes(){
//     const frase = (`Eu sou Bruna, tenho 34 anos, moro em Vinhedo e sou estudante.`)
//     console.log(frase)
// }
// informacaoes()
//==============================================================================================
// 
// b)
// function informacoes(nome, idade, endereco,souOuNao){
//     if (souOuNao = true){
//     souOuNao = "sou"
// }    else{ souOuNao = "não sou"
// }
//     const frase = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${souOuNao} estudante.`)
//     console.log(frase)
// }
// informacoes("Bruna",34,"Vinhedo",true)

// ------------------------------Exercício 5 --------------------------------------
// a)
// function doisnumeros (num1, num2){
//     let soma = num1 + num2
//     return soma
// }
// console.log(doisnumeros(3,4))
//==============================================================================================
// b)
// function maiorOuIgual (num1,num2){
//     let comparador 
//     if (num1>=num2) {
//         comparador = true
//     }   else {
//         comparador = false
//     }   
//     return comparador
// }   
// console.log(maiorOuIgual(8,3))
//==============================================================================================
// c)
// function imprimirDezVezes (texto){
//     for (i=0; i<10; i++){
//         console.log(texto)
//     }
// } 
// imprimirDezVezes ("Sou LadyBug")
// ------------------------------Exercício 6 --------------------------------------
// a) 
// function tamanhoDeArray (array){

//     return array.length
// }
// let arrayDeNumeros = [2,3,45,6,7,8]
// const verTamanho = tamanhoDeArray(arrayDeNumeros)
// console.log (verTamanho)
//==============================================================================================
// b)
// function verificarPar (numero){
//     let numeroPar
//     if (numero % 2 === 0){
//         numeroPar = true
//     }   else {
//         numeroPar = false
//     }
//     return numeroPar
// }
// const check = verificarPar(89)
// console.log(check)
//==============================================================================================
// c)
// function quantidadeNumerosPares (array){
//     let numerosPares =[]
//     for (let i = 0; i<array.length; i++){
//         if (array[i] % 2 === 0){
//             numerosPares.push(array[i])
//         } 
// }     console.log(numerosPares)
// //    return numerosPares.length
// }
// let conjunto =[2, 4, 6, 8, 9, 11, 17, 19, 23, 54, 10, 15, 12, 20, 44, 56, 60, 80, 75]
// const resultado = quantidadeNumerosPares(conjunto)
// console.log(resultado)
//==============================================================================================
// d)
// function booleanNumeroPar (array){
//     let numerosPares =[]
//     for (let i=0; i < array.length; i++){
//         if (array[i] % 2 === 0){
//             numerosPares.push(true)
//             }
//     }console.log(numerosPares)
//     return numerosPares.length
// }   
// let conjunto = [34, 45, 67, 88, 56, 80, 22, 54, 70]
// const resultado = booleanNumeroPar(conjunto)
// console.log(resultado)
//==============================================================================================
//------------------------------------Desafios -------------------------------------------------
// ------------------------------Exercício 1 --------------------------------------------------
// a)
// const imprimir = (parametro) =>{
//     console.log(parametro)
//     return parametro
// }
// b)
// const DoisValores = (num1,num2) =>{
//     let resultado = num1 + num2
//    //sem return não funciona
// }
// let soma = DoisValores(30,20)
// imprimir(soma)
// =================================================================================================
// ------------------------------Exercício 2 --------------------------------------------------
// 
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// a)

// function multiplosDeDois (array){
//      let conjuntoPar = []
//      for (let i = 0; i<array.length; i++)
//      if (i % 2 === 0){
//         conjuntoPar.push(i)
//     }
//     return conjuntoPar
// }
// console.log(multiplosDeDois(numeros))

// b)
// function retorneMaiorNumero (array){
//     let maiorNumero = 0
//     for (let  i = 0; i < array.length; i++){
//         if (array[i]>maiorNumero){
//             maiorNumero = array[i]
//         }
//     }
//     return maiorNumero
// }
// console.log(retorneMaiorNumero(numeros))
// =================================================================================================
// c)
// function retorneindiceMaior (array){
//     let indicemaior = 0
//       for (let i = 0; i< arraylength; i++){
//         if (array[i])>maiorNumero){
//             indicemaior.splice(array.length[i])
//         }
//     }
// }
// console.log(retorneindiceMaior(numeros))
// =================================================================================================
// d) 
// function inverterArray (array){
//     let arrayinvertida = array.reverse()
//     return arrayinvertida
// }

// console.log(inverterArray(numeros))