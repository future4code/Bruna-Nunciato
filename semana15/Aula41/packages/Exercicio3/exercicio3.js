let tarefas =["Lavar louça"]
let tarefa = String(process.argv[2])
 
tarefas.push(tarefa)
console.log(`Tarefa adionada com sucesso. Tarefas:`, tarefas)
