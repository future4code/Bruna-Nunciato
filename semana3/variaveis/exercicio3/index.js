let comida = ["sopa", "salada de grão de bico", "ratatouille", "tabule de quinoa", "macarrao de abobrinha"]

console.log(comida)

console.log("Essas são minhas comidas preferidas: ")

console.log (comida[0])
console.log (comida[1])
console.log (comida[2])
console.log (comida[3])
console.log (comida[4])


const comidasua = prompt ("Qual a sua comida preferida ?")
console.log("Sua comida preferida é " + comidasua)

comida[1] = comidasua
console.log("nova lista :")
console.log (comida[0])
console.log (comida[1])
console.log (comida[2])
console.log (comida[3])
console.log (comida[4])