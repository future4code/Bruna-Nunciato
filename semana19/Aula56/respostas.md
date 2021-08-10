1)
a. round é usado pra implementar mais segurança evitando ataques,
e salt é a mistura que é feita dos algoristimos antes do hash para tornar mais seguro,
por padrão o cost do round é 12, por ser o limite e o mais utilizado na maioria das libs.

b. no codigo
c.no código

2) a. primeiro endpoint a ser testado deve ser o de cadastro, pois, apartir deste adicionamos os dados criptografados , para pegarmos nos proximos endpoints.
b. no codigo
c.  não precisa, pois, ele é acessado utilizando o token, que é fornecido no cadastro ou login, e estes são acessados com a senha , e portanto já deveria estar no banco de dados criptografada.

3) no código
4) no código

