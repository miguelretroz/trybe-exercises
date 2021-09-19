SELECT
    first_name
FROM
    sakila.actor
GROUP BY
    first_name;
    
SELECT
    first_name,
    COUNT(*)
FROM
    sakila.actor
GROUP BY
    first_name;
    
SELECT
    rating,
    AVG(length)
FROM
    sakila.film
GROUP BY
    rating;
    
SELECT
    rating,
    MIN(replacement_cost)
FROM
    sakila.film
GROUP BY
    rating;
    
SELECT
    rating,
    MAX(replacement_cost)
FROM
    sakila.film
GROUP BY
    rating;
    
SELECT
    rating,
    SUM(replacement_cost)
FROM
    sakila.film
GROUP BY
    rating;
    
-- Having
SELECT
    first_name,
    COUNT(*)
FROM
    sakila.actor
GROUP BY
    first_name
HAVING
    COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT
    first_name,
    COUNT(*) AS nomes_cadastrados
FROM
    sakila.actor
GROUP BY
    first_name
HAVING
    nomes_cadastrados > 2;


-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT
    first_name,
    COUNT(*) AS 'nomes cadastrados'
FROM
    sakila.actor
GROUP BY
    first_name
HAVING
    'nomes cadastrados' > 2;

-- É possível substituir as aspas por acentos graves (``)
SELECT
    first_name,
    COUNT(*) AS `nomes cadastrados`
FROM
    sakila.actor
GROUP BY
    first_name
HAVING
    `nomes cadastrados` > 2;