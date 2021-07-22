<h1> Respostas Aula 48</h1>

<h4> 1.a) chave estrangeira faz referencia a um dado trazido de outra coluna </h4>

<h4>b)

ALTER TABLE Movie ADD playing_limit_date DATE ;



UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";


RENAME TABLE Movies TO Filmes; 



CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating 
VALUES(
"001",
"Switching Sides In the War of Sexes",
"8",
"001"
);

INSERT INTO Rating 
VALUES(
"002",
"Not an original premise, but greatly developed",
"7.7",
"002"
);

INSERT INTO Rating 
VALUES(
"003",
"A Delightful Transposition to the Cinema of the Greatest Best-Seller of the Brazilian Literature",
"10",
"003"
);

INSERT INTO Rating 
VALUES(
"004",
"Very Funny film with plenty of pace.",
"6",
"004"
);

INSERT INTO Rating 
VALUES(
"005",
"Very Funny film with plenty of pace.",
"6",
"005"
);
-- 	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`paiva-2125472-bruna-nunciato`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.375 sec
-- falha na restrição de refencia de id movies

ALTER TABLE Movie DROP COLUMN rating;

DELETE FROM Movie WHERE id = "001";
--	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`paiva-2125472-bruna-nunciato`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.172 sec
-- não pode deletar ou atualizar linha de uma chave estrangeira, ou seja onde qualquer coisa dessa tabela que esteja relacionada a outra tabela não pode ser alterado


CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Sônia Braga",
  45000.00,
  "1950-06-08", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "009", 
  "Camila Morgado",
  65000.00,
  "1975-04-12", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "010", 
  "Gloria Pires",
  78500.00,
  "1979-08-23", 
  "female"
);



UPDATE Actor
SET name = "Alice Braga",
birth_date = "1983-04-15",
gender = "female",
salary = 7000000
WHERE id = "003";



-- essa tabela traz os dados de ambas tabelas e relaciona os ids de ambas
INSERT INTO MovieCast
VALUES(
"003",
"007"
);

INSERT INTO MovieCast
VALUES(
"003",
"005"
);

INSERT INTO MovieCast
VALUES(
"004",
"006"
);

INSERT INTO MovieCast
VALUES(
"004",
"009"
);

INSERT INTO MovieCast
VALUES(
"002",
"008"
);

INSERT INTO MovieCast
VALUES(
"001",
"001"
);

INSERT INTO MovieCast
VALUES(
"001",
"013"
);
-- 	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`paiva-2125472-bruna-nunciato`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.157 sec
-- Não pode ser adicionado ou atualizado em linha , pois a chave estrangeira ou no caso o dado da tabela exportada não existe.

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

SELECT Movie.id, Movie.title,rating.rate  FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- relaciona os dados das tabelas Movie e Rating com o Join e com o ON é feito a ligação desses dados no caso pelos Id's de ambas tabelas


SELECT m.id as movie_id, m.title as movie_title, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;