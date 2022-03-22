USE sakila;

-- 1. Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
DELIMITER $$

CREATE FUNCTION GetTotalPayment(customer_id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total INT;
    SELECT
        COUNT(amount)
    FROM
        sakila.payment AS p
    WHERE
        p.customer_id = customer_id
    INTO
        total;
    RETURN
        total;
END $$

DELIMITER ;

SELECT GetTotalPayment(4);

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
DELIMITER $$

CREATE FUNCTION GetFilmName(inventory_id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
    DECLARE film_name VARCHAR(100);
    SELECT
        f.title
    FROM
        sakila.film AS f
    WHERE f.film_id = (
        SELECT
            film_id
        FROM
            sakila.inventory AS i
        WHERE
            i.inventory_id = inventory_id
    )
    INTO
        film_name;
    RETURN
        film_name;
END $$

DELIMITER ;

SELECT GetFilmName(20);

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
DELIMITER $$

CREATE FUNCTION GetFilmAmountByCategory(category VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
    DECLARE film_amount INT;
    SELECT
        COUNT(film_id)
    FROM
        sakila.film_category
    WHERE
        category_id = (
            SELECT
               category_id
            FROM
                sakila.category
            WHERE
                `name` = category
        )
    INTO
        film_amount;
    RETURN
        film_amount;
END $$

DELIMITER ;

SELECT GetFilmAmountByCategory('Action');