// Exercício 1
// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// R: apos node e o caminho passamos o parametro, antes disso foi escrito uma variavel com process.agvr[2] 
// exemplo: npm run nome-e-caminho-do-arquivo paramentro

const nome = (process.argv[2])
const idade = Number(process.argv[3])
console.log(`Olá, ${nome}! Você tem ${idade} anos`)
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá`,(idade+7) )