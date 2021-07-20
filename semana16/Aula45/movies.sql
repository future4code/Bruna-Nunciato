CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie
VALUES (
"001",
"Se eu fosse você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/01/06",
"7"
);

SELECT * from Movie;

INSERT INTO Movie 
VALUES (
"002",
"Doce de Mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
"10"
);

INSERT INTO Movie 
VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02",
"8"
);

INSERT INTO Movie
VALUES (
"004",
"Divórcio",
"O casal leva uma vida humilde, até que ficam ricos depois de criar um molho de tomate sucesso nacional. Com o passar dos anos os dois vão se distanciando. Eles entram num processo de divórcio bastante conturbado.",
"2017/09/21",
"7"
);

SELECT id, title, rating FROM Movie WHERE id = "004";

SELECT * FROM Movie WHERE title like "Divórcio";

SELECT id, title, synopsis FROM Movie WHERE rating > 7;

SELECT * FROM Movie
WHERE title LIKE "%vida%";

SELECT * FROM Movie
WHERE title LIKE "%d%" OR
      synopsis LIKE "%eu%";
      
SELECT * FROM Movie
WHERE release_date < "2020-05-04";

SELECT * FROM Movie
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%eu%" OR
      synopsis LIKE "%da%") AND rating > 7;