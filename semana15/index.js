// Exercício 1
// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// R: apos node e o caminho passamos o parametro, antes disso foi escrito uma variavel com process.agvr[2] 
// exemplo: npm run nome-e-caminho-do-arquivo paramentro

// const nome = (process.argv[2])
// const idade = Number(process.argv[3])
// console.log(`Olá, ${nome}! Você tem ${idade} anos`)
// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá`,(idade+7) )

// Exercício2

// const operacao = (process.argv[2])
// const num1 = Number(process.argv[3])
// const num2 = Number(process.argv[4])

// switch(operacao){
// 	case "soma":
//         console.log(`Resultado: ${num1 + num2}`)
//         break;
// 	case "sub":
//         console.log(`Resultado: ${num1 - num2}`)
// 		break;
//     case "mult":
//         console.log(`Resultado: ${num1 * num2}`)
//         break;
//     case "div":
//         console.log(`Resultado: ${num1 / num2}`)
//         break;
// }
// Exercício 3
let tarefas =["Lavar louça"]
let tarefa = String(process.argv[2])
 
tarefas.push(tarefa)
console.log(`Tarefa adionada com sucesso. Tarefas:`, tarefas)
