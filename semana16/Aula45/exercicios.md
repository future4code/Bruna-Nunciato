CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
SHOW DATABASES; -- mostra arquivos de dados
SHOW TABLES; -- mostra tabela existente
DESCRIBE Actor; 

* mostra informações do arquivo, no caso da tabela, as colunas e linhas e conteudo.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO Actor (Id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
    );
    
INSERT INTO Actor (Id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Juliana Paes",
    1200000,
    "1973-04-23",
    "female"
    );
    -- chave primaria duplicada 002, erro 1062
    
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
* coluna não compatível com valor da linha 1, erro 1136

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
* campo name não tem um valor padrão, erro 1364

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
<h1> SELECT * FROM Actor;  </h1>

<h1> SELECT id, salary from Actor; </h1>

<h1> SELECT id, name from Actor WHERE gender = "male";  </h1>

<h1> SELECT id, name from Actor WHERE gender = "female"; </h1>

<h1> SELECT salary from Actor WHERE name like "Tony Ramos"; </h1>

<h1> SELECT * from Actor Where gender = "invalid"; </h1>

<h1> SELECT * from Actor WHERE gender = "algo"; </h1>

<h1> SELECT id, name, salary from Actor Where salary < 5000000; </h1>

<h1> SELECT id, nome from Actor WHERE id = "002"; -- columa nome no campo de lista desconhecido, erro 1054 </h1>

<h1> SELECT id, name from Actor WHERE id = "002"; -- arrumei nome, para name, funcionou. </h1>

<h1> SELECT name from Actor WHERE (name like "A%" OR name LIKE "J%") AND salary > 300000;</h1> 

* procurar nomes (SELECT name) em actor (from) que o nome comece com a ou j  primeiramente ()   e tenham salario maior que 300000

<h1> SELECT name from Actor WHERE (name not like "A%" ) AND salary > 350000;</h1>

<h1> SELECT name from Actor WHERE name like "%g%"; </h1>

<h1> SELECT name from Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary between 350000 AND 900000; </h1>




    