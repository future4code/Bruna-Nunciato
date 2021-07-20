ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- a. deleta a coluna salario
-- b. altera e limita a coluna de genero para sexo com 6 caracteres
-- c. altera limite da coluna genero para genero os caracteres padrao
-- d.
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- 2. a. 
UPDATE Actor
SET name = "Maria Julia" AND  birth_date = "1986-10-08"
WHERE id = "003";

UPDATE Actor
SET birth_date = "1986-10-08"
WHERE id = "003";
-- 2. b.
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";

-- 2. c.
UPDATE Actor
SET name = "Alice Braga",
birth_date = "1983-04-15",
gender = "female",
salary = 7000000
WHERE id = "005";

-- 2. d.
UPDATE Actor
SET name = "Moacir Franco",
birth_date = "1923-07-15",
gender = "male",
salary = 500000
WHERE id = "008";

--  row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.140 sec => linha não foi afetada, nada encontrado e nada alterado e sem aviso.

-- 3. 
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
-- rror Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.	0.156 sec

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
    
-- 4. a.
SELECT MAX(salary) FROM Actor;

-- 4. b.
SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- 4. c.
SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- 4. d.
SELECT SUM(salary) FROM Actor;

-- 5.  a. esta query dá a quantidade de atores do sexo feminino e masculino agrupando separadamente
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- 5 b. 
SELECT id, name FROM Actor
ORDER BY name DESC;
-- 5 c.
SELECT name , salary FROM Actor
ORDER BY salary DESC LIMIT 3;

-- 5 d.
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

-- 6. a.
ALTER TABLE Filmes ADD playing_limit_date DATE ;
-- 6. b.
ALTER TABLE Filmes CHANGE avalicao avalicao FLOAT;

ALTER TABLE Filmes CHANGE playing_limit_date playing_limit_date DATE ;

-- 6. c.
UPDATE Filmes
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

-- 6. d.
DELETE FROM Filmes WHERE id = "001";

-- 7. a.

SELECT COUNT(*) FROM Filmes WHERE avalicao > 7.5;

-- 7. b.

SELECT AVG(avalicao) FROM Filmes;

-- 7. c.
SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURDATE();

-- 7. d.
SELECT COUNT(*) FROM Filmes WHERE data_de_lancamento > CURDATE();

-- 7. e.
SELECT MAX(avalicao) FROM Filmes;

-- 7. f.
SELECT MIN(avalicao) FROM Filmes;

ALTER TABLE Filmes
CHANGE avalicao avaliacao VARCHAR(255); 


-- 8.a.
SELECT * From Filmes ORDER BY nome;

-- 8.b.
SELECT * FROM Filmes ORDER BY nome LIMIT 5;

-- 8. c.
SELECT * FROM Filmes
WHERE data_de_lancamento < CURDATE() 
ORDER BY data_de_lancamento DESC 
LIMIT 3;

-- 8. d.
SELECT * FROM Filmes
ORDER BY avaliacao DESC 
LIMIT 3;


