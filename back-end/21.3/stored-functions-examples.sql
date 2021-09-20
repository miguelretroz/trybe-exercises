USE sakila;

-- 1. Uma stored function que exibe a quantidade de filmes em que um determinado ator ou atriz atuou:
DELIMITER $$

CREATE FUNCTION MoviesWithActor(actor_id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_total INT;
    SELECT
        COUNT(*)
    FROM
        sakila.film_actor AS fa
    WHERE
        fa.actor_id = actor_id
    INTO
        movie_total;
    RETURN movie_total;
END $$

DELIMITER ;

SELECT MoviesWithActor(1);

-- 2. Uma stored function que exibe o nome completo de um ator ou de uma atriz, dado seu id como parâmetro:
DELIMITER $$

CREATE FUNCTION GetFullName(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
    DECLARE full_name VARCHAR(200);
    SELECT
        CONCAT(first_name, ' ', last_name)
    FROM
        sakila.actor
    WHERE
        actor_id = id
    LIMIT 1
    INTO
        full_name;
    RETURN full_name;
END $$

DELIMITER ;

SELECT GetFullName(51);