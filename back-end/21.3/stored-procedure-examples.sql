-- Procedure sem parâmetros
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
    SELECT * FROM sakila.actor;
END $$

DELIMITER ;

CALL ShowAllActors();

-- Variable
SET @my_school = 'BeTrybe';
SELECT @my_school;

-- Procedure com parâmetros de entrada (IN)
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT
        *
    FROM
        sakila.actor
    WHERE
        first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;

CALL ShowActorsWithSyllable('lope');

-- Procedure com parâmetros de saida (OUT)
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
    IN film_name VARCHAR(300),
    OUT media_aluguel_em_dias DOUBLE
)
BEGIN
    SELECT
        AVG(rental_duration)
    INTO
        media_aluguel_em_dias
    FROM
        sakila.film
    WHERE
        title = film_name;
END $$

DELIMITER ;

CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;

-- Procedure com parâmetros de entrada-saida (IN-OUT)
USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT
        CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY')
    INTO
        film_name;
END $$

DELIMITER ;

SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;