//HERANÇA
1)a. Na classe User é possivel.

b. Apenas uma vez

2) a. classe Customer foi chamado uma vez
b. Classe User foi impressa duas vezes, pois, foi reutilizado na subclasse Customer, além da propria classe

3) a. Não é possivel obter a informação do password , pois ela é privada somente para a classe User.

4) (no código em Index)
5) (no código em Index)

//POLIMORFISMO

1) imprimiu name, registrationNumer e consumedEnergy. Não foi possivel imprimir calculateBill, pois, é uma função que não tem retorno tipado.

2)a.'não é possivel criar uma instância de uma classe abstrata'

b. Para ser possível criar uma instância, é necessario fazer uma subclasse(classe filha) da classe Place, e criar uma instância dessa última.

3) 1. (vide 2 b.)
2. interface atribui tipo,atributos e métodos para ser seguidos, e implementados.
 já classe abstrata serve para ser herdada por subclasses(classe filha), por abstrai e armazenar, ou seja ela possui a propriedade protected.


3.ela não retorna instâncias, classe abstrata serve para ser herdada por subclasses(classe filha), dentro de um contexto.

4) a. Possui os métodos: public e private, as propriedades: name, registrationNumber, consumedEnergy, cpf, residentsQuantity e cep.

5) a. Possuem as mesmas propriedades(name, registrationNumber, consumedEnergy, cep), somente diferenciando uma delas.
b. cnpj e cpf , que as determinam como residencial e comercial, e para questões de calculo ( residentsQuantity e floorsQuantity).

6) a. IndustrialClient é filha de Industry, pois aparece a 'extends' .
b. IndustrialClient implementa Client , pois aparece 'implements '.
c. qualquer outro métodos deve alterar o pai, portanto deveria estar na classe acima.