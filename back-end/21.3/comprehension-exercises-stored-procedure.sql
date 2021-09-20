USE sakila;
-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
DELIMITER $$

CREATE PROCEDURE ShowTenMostPopularActors()
BEGIN
    SELECT
        actor_id,
        COUNT(*) AS film_amount
    FROM
        sakila.film_actor
    GROUP BY
        actor_id
    ORDER BY
        film_amount DESC
    LIMIT 10;
END $$

DELIMITER ;

CALL ShowTenMostPopularActors();

-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
DELIMITER $$

CREATE PROCEDURE ShowFilmsByCategory(IN category_name VARCHAR(50))
BEGIN
    SELECT
        f.film_id,
        f.title,
        c.category_id,
        c.`name`
    FROM
        sakila.category AS c
    INNER JOIN
        sakila.film AS f
    WHERE EXISTS (
        SELECT
            *
        FROM
            sakila.film_category AS fc
        WHERE
            fc.category_id = c.category_id
        AND fc.film_id = f.film_id
    )
    AND c.`name` = category_name;
END $$

DELIMITER ;

CALL ShowFilmsByCategory('Animation');

-- 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
DELIMITER $$

CREATE PROCEDURE CheckIfTheUserIsActive(
    IN user_email VARCHAR(100),
    OUT is_active BOOL
)
BEGIN
    SELECT
        active
    INTO
        is_active
    FROM
        sakila.customer
    WHERE
        email = user_email;
END $$

DELIMITER ;

SELECT @active_status;
CALL CheckIfTheUserIsActive('MARY.SMITH@sakilacustomer.org', @active_status);
SELECT @active_status;
