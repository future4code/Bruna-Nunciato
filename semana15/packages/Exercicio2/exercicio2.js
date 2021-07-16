// Exercício2

const operacao = (process.argv[2])
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch(operacao){
	case "soma":
        console.log(`Resultado: ${num1 + num2}`)
        break;
	case "sub":
        console.log(`Resultado: ${num1 - num2}`)
		break;
    case "mult":
        console.log(`Resultado: ${num1 * num2}`)
        break;
    case "div":
        console.log(`Resultado: ${num1 / num2}`)
        break;
}