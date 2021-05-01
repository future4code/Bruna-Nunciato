//Exercício 1

function inverteArray(array) {
  let arrayinvertida = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayinvertida.push(array[i]);
  }
  return arrayinvertida;
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
  let numerosParesAoQuadrado = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosParesAoQuadrado.push(array[i] ** 2);
    }
  }
  return numerosParesAoQuadrado;
}
  


//Exercício 3

function retornaNumerosPares(array) {
  let numerosPares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosPares.push(array[i]);
    }
  }
  return numerosPares;
}

//Exercício 4

function retornaMaiorNumero(array) {
   let numeroMaior = 0
   for (let i of array){
      if (i> numeroMaior){
         numeroMaior= i
      }
   }
   return numeroMaior
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   let quantidadeElementos = array.length
   
return quantidadeElementos
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3 
   
   let expressao1 = booleano1 && booleano2 && !booleano4
   let expressao2 = (booleano1 && booleano2) || !booleano3
   let expressao3 = (booleano2 || booleano3) && (booleano4 || booleano1)
   let expressao4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
   let expressao5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
   let respostas = [expressao1, expressao2, expressao3, expressao4, expressao5] 
   
   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
  let nRetornado = [];
  let i = 0;
  while (i < n) {
    nRetornado.push(i * 2);
    i++;
  }
  return nRetornado;
}


// Exercício 8

function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return "Equilátero";
  }   else if ((a === b && b != c) || (a === c && c != b) || (c === b && b != a)) {
    return "Isósceles";
  } 
  else {
     return "Escaleno";
   
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
     let numeroMaior 
   let numeroMenor
   let maiorDivisivelporMenor 
   let diferenca 
   if (num1>num2){
       numeroMaior = num1
       numeroMenor = num2
   } else {
      numeroMaior = num2
      numeroMenor = num1
   }
     
   if (numeroMaior % numeroMenor === 0){
      maiorDivisivelporMenor = true
   }  else{ 
      maiorDivisivelporMenor = false
   }
   diferenca = (numeroMaior - numeroMenor)
  
   let doisNumeros ={
      maiorNumero: numeroMaior , maiorDivisivelporMenor: maiorDivisivelporMenor, diferenca: diferenca
   }
 
   return doisNumeros
   
}


// Exercício 10

function segundoMaiorEMenor(array) {
//   let segundoNumeroMaior = 0;
//   let segundoNumeroMenor = Infinity;

//   for (let i = 0; i < array.lenght; i++) {
//     for (let i = 0; i < array.lenght; i++) {
//       if (array[i] > array[i + 1]) {
//         segundoNumeroMaior = array[i];
//       }
//     }
//   }
//   for (let i = array.lenght; i >= 0; i--) {
//     for (let i = array.lenght; i >= 0; i--) {
//       if (array[i] < array[i - 1]) {
//         segundoNumeroMenor = array[i];
//       }
//     }
//   }
//   const arrayDoisValores = (segundoNumeroMaior, segundoNumeroMenor);
//   return arrayDoisValores;
}

//Exercício 11

function ordenaArray(array) {
   // let bubble 
   // for (let i = 0; i <array.length; i++){
   //    for (let i= 0; i<array.length; i++){
   //       if(array[i]> array[i+1])
   //          bubble = array[i];
   //          array[i] = array[i+1]
   //          array[i+1] = bubble
   //       }
   //    }
   }
  
  


// Exercício 12

function filmeFavorito() {
 const filmeFav = {
    nome:"O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
  
   return filmeFav
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]
// // const pessoas.map(pessoa, id, arr)=>{
// //    return.pessoa.idade>18
// }

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
 //ordenaArray

 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}