// const minhaString: string = 1

// a) aparece o erro indicando que number não é uma string atribuível

// const meuNumero: number =1
// b) se alterarmos para 
// let meuOutro: (number| string) = 1
// meuOutro = "dois"
// console.log(typeof meuOutro)
// c) 

type pessoa= {nome:string, 
    idade: number, 
    corFavorita:string
} 
enum CORES_DO_ARCO_IRIS {
    VIOLETA = "Violeta",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho"
}

let pessoa1: pessoa = {
    nome: "Bruna",
    idade: 34,
    corFavorita: CORES_DO_ARCO_IRIS.VERDE
}
let pessoa2: pessoa = {
    nome: "Juliana",
    idade: 40,
    corFavorita: CORES_DO_ARCO_IRIS.VIOLETA
}
let pessoa3: pessoa = {
    nome: "Natalia",
    idade: 36,
    corFavorita: CORES_DO_ARCO_IRIS.AMARELO
}



