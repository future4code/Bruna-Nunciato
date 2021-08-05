## Exercício da Semana

Seu nome anda circulando pelas redes e fóruns de desenvolvimento web! Seus projetos de front-end deram o que falar, e agora estão sabendo que você está também aprontando no back-end.

De manhã, você acordou, tomou uma bela xícara de café, verificou sua caixa de email e viu que a equipe do LabECommerce gostou muito do seu trabalho de front-end, e quer te chamar para dar uma atualizada no back-end do sistema de lá. 

## Enunciado

Durante esta semana, vimos um novo paradigma de programação, a Orientação a Objetos, e como ela nos ajuda a estruturar nosso código, e manter tudo tendo uma mesma "cara". Isso é perfeito para as novas necessidades do LabECommerce. Sendo assim, te passaram uma lista do que o projeto precisa ter:

**Usuário**

O projeto precisa ter uma **classe** `User`, que receba o nome, o e-mail, a idade e gere um **identificador único** (id).

**Produto**

O projeto precisa ter uma **classe** `Product`, que receba o **identificador único** do produto, seu nome, sua descrição e seu preço. Essa classe serve para guardar as camisetas e lembrancinhas da loja.

**Passagens**

Como nova funcionalidade do projeto do front-end do LabECommerce, o serviço da empresa também vende **viagens**! Portanto, agora o projeto precisa ter uma nova **classe**, chamada `Ticket`, que receba o **identificador único** do produto, seu nome, sua descrição e seu preço, e também a **origem** e o **destino** dessa viagem. **Para criar esta classe é obrigatório que ela também seja uma classe `Product`. Você deve fazer isto utilizando herança ou implementando interfaces.**

Dica: no banco de dados você pode:
- Criar outra tabela para gerenciar as passagens;
- Criar outros dois campos na tabela de produtos, deixando-os como opcionais.

**Compras**

O projeto precisa ter uma **classe** `Purchase`, que receba o **identificador único** **do produto**, o **identificador único** **do usuário**, a quantidade de itens daquele produto que foi comprada, e o valor total da compra. O projeto ainda não possui um carrinho, então cada compra tem apenas um produto.

## Endpoints mínimos do MVP

1. Criar um usuário

- **método: `post`**
- name, email e age, passados por **body params**. O id deve ser gerado pela própria aplicação, e precisa ser uma **string**.
- Deve inserir o **User** no banco de dados
- O User criado deve ser inserido a partir de uma nova instância de **User**

2. Criar um produto

- **método: `post`**
- name, description e price, passados por **body params**. O id deve ser gerado pela própria aplicação, e precisa ser uma **string**.
- Deve inserir o **Product** no banco de dados
- O produto criado deve ser inserido a partir de uma nova instância de **Product**

3. Listar todos os usuários

- **método: `get`**
- Sem parâmetros;
- Deve trazer uma lista de todos os **usuários** cadastrados no banco;
- Precisa **obrigatóriamente** devolver um array da Classe **User**

4. Listar todos os produtos

- **método: `get`**
- Sem parâmetros;
- Deve trazer uma lista de todos os **produtos** cadastrados no banco;
- Precisa **obrigatóriamente** devolver um array da Classe **Product**