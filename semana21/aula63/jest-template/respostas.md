Exercício 3
Agora, vamos implementar a função (`performAttack`) que represente o ataque de um personagem a outro. Ela deve receber dois parâmetros: `attacker` (atancante) e `defender` (defensor) que são do tipo `Character`. 

O comportamento dela deve ser:

- Caso algum dos personagens esteja inválido, a função deve indicar um erro: `Invalid Character`
- Ela deve retirar do `defender` o valor final do ataque (`(força do attacker) - (defesa do defender)`)
- Caso a defesa do `defender` seja maior do que a força do `attacker`, nenhuma vida do `defender` deve ser retirada
- Você deve fazer duas implementações dessas funções

*a. Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação*

*b. Implemente a função utilizando inversão de dependências*

*c. Explique, com as suas palavras, as diferenças entre as duas implementações*

RESPOSTA:
A PRIMEIRA FAZ A VALIDAÇÃO DOS CAMPOS TEREM UM VALOR DIFERENTE DE UNDEFINED E MAIOR QUE ZERO NO CASO DE NÚMEROS
E A SEGUNDA FAZ A VALIDAÇÃO SENDO STRING OU NUMEROS , CONFORME OS CAMPOS DETERMINADOS EM CHARACTER


Antes de começar a criar os testes dessas funções, vamos nos relemebrar dos Mocks. 

Eles são muito importantes quando vamos realizar testes unitários, pois permitem que realizemos o teste sem utilizar nenhuma implementação das dependências, garantindo que ele seja isolado e específico para a função/classe que estamos tentando testar.

Para criar um  Mock no Jest, temos que usar a função `jest.fn`, como mostrado abaixo:

```tsx
test("Showing jest.fn", () => {
	const mock = jest.fn(() => {
		const user = {
				name: "Astrodev",
				age: 29
		}
		return user
	})
})
```

Em um arquivo de teste feito só para esse treino:

*a. De qual das duas funções (*`validateCharacter` ou `performAttack`)  deveremos criar um Mock nos próximos testes? Justifique.

RESPOSTA: VALIDAÇÃO PARA CHARACTER, POIS, ELE JÁ SENDO INVALIDO, JÁ NAO SERÁ POSSIVEL FAZER O ATTACK


