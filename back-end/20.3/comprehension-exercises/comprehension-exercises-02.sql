USE sakila;

-- Exemplos
SELECT
    *
FROM
film
WHERE
    title LIKE '%don';

SELECT
    *
FROM
    film
WHERE
    title LIKE 'plu%';

SELECT
    *
FROM
    film
WHERE
    title LIKE '%plu%';

SELECT
    *
FROM
    film
WHERE
    title LIKE 'p%r';

SELECT
    *
FROM
    film
WHERE
    title LIKE '_C%';

SELECT
    *
FROM
    film
WHERE
    title LIKE '________';

SELECT
    *
FROM
    film
WHERE
    title LIKE 'E__%';
