const blog =[]

function criarDados (){

    const tituloInput = document.getElementById("titulo-post")
    const autorInput = document.getElementById("autor-post")
    const conteudoInput = document.getElementById("conteudo-post")
    const imagemInput = document.getElementById("image-post")
    const imagem = document.getElementById("image-post").value
    const titulo = document.getElementById("titulo-post").value
    const autor = document.getElementById("autor-post").value
    const conteudo = document.getElementById("conteudo-post").value
    const informacoesinseridas = {titulo, autor, imagem, conteudo}
    blog.push(informacoesinseridas)
    console.log(blog)
    tituloInput.value =""
    autorInput.value =""
    conteudoInput.value =""
    imagemInput.value = ""
    const diario = document.getElementById("diario")
    diario.innerHTML += `<h1> ${titulo}</h1><h5> ${autor}</h5> <p> ${conteudo}</p>`
    diario.innerHTML += `<img src="${imagem}"></img>`
   
}


