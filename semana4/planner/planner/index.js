const tarefaAdicionada = document.getElementById("tarefa")
const tarefaDomingo = document.getElementById("domingo")
const tarefaSegunda = document.getElementById("segunda")
const tarefaTerca = document.getElementById("terca")
const tarefaQuarta = document.getElementById("quarta")
const tarefaQuinta = document.getElementById("quinta")
const tarefaSexta = document.getElementById("sexta")
const tarefaSabado = document.getElementById("sabado")

const seletor = document.getElementById("dias-semana")
const 
function adicionaTarefa (){
    if (tarefaAdicionada.value === ""){
        alert("Adicione um valor em tarefa!!")
    return 
    }  

    if (seletor.value === "domingo"){
        tarefaDomingo.innerHTML+= `<p>${tarefaAdicionada.value}</p>`
        tarefaAdicionada.value = ""
    }   else if (seletor.value === "segunda"){
        tarefaSegunda.innerHTML+= `<p>${tarefaAdicionada.value}</p>`
        tarefaAdicionada.value = ""
    }   else if (seletor.value === "terca"){
        tarefaTerca.innerHTML+= `<p>${tarefaAdicionada.value}</p>`
        tarefaAdicionada.value = ""
    }   else if (seletor.value === "quarta"){
        tarefaQuarta.innerHTML+= `<p>${tarefaAdicionada.value}</p>`
        tarefaAdicionada.value = ""
    }   else if (seletor.value === "quinta"){
        tarefaQuinta.innerHTML+= `<p>${tarefaAdicionada.value}</p>`
        tarefaAdicionada.value = ""
    }   else if (seletor.value === "sexta"){
        tarefaSexta.innerHTML+= `<p>${tarefaAdicionada.value}</p>`
        tarefaAdicionada.value = ""
    }   else if (seletor.value === "sabado"){
        tarefaSabado.innerHTML+= `<p>${tarefaAdicionada.value}</p>`
        tarefaAdicionada.value = ""
    }   
    
}

function limpar(){
    let resetar = document.getElementsByTagName("p")
    for ( let i of resetar ){
        i.innerHTML = ""
    }
}

function riscar (){
        let arrayTarefasDomingo = [tarefaDomingo.innerHTML]
   return
}
console.log(riscar)