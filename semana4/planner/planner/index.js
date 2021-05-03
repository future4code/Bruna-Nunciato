
const semana = document.getElementsByClassName("semana")
let tarefaAdicionada = document.getElementById("tarefa")



function adicionaTarefa() {
  let seletor = document.getElementById("dias-semana");
  if (tarefaAdicionada.value != "") {
    let divSemana = document.getElementById(`${seletor.value}`);
    divSemana.innerHTML += `<p>${tarefaAdicionada.value}</p>`;
    tarefaAdicionada.value = "";
  }
   else {
    alert("Adicione um valor em tarefa!!");
  }
  
}

function limpar(){
    let resetar = document.getElementsByTagName("p")
    for ( let i of resetar ){
        i.innerHTML = ""
    }
}