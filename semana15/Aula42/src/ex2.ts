function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
// a) função recebe array de numeros, e retorna um array de objeto com as estatisticas de numeros
