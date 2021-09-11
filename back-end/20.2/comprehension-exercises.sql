SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'área de atuação';
SELECT 'Miguel';
SELECT 'Miguel', 'Retroz', 'Sorocaba', 21;
SELECT 'Miguel' AS nome, 'Retroz' AS sobrenome, 'Sorocaba' AS cidade, 21 AS idade;
SELECT 13 * 8;
SELECT now() AS 'data atual';

SELECT * FROM sakila.city;
SELECT first_name, last_name FROM sakila.customer;
SELECT * FROM sakila.rental;
SELECT title, description, release_year FROM sakila.film;
SELECT * FROM sakila.actor;
SELECT * FROM sakila.address;
SELECT * FROM sakila.category;
SELECT * FROM sakila.city;
SELECT * FROM sakila.country;
SELECT * FROM sakila.customer;
SELECT * FROM sakila.film;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film_category;
SELECT * FROM sakila.film_text;
SELECT * FROM sakila.filme;
SELECT * FROM sakila.inventory;
SELECT * FROM sakila.language;
SELECT * FROM sakila.payment;
SELECT * FROM sakila.rental;
SELECT * FROM sakila.staff;
SELECT * FROM sakila.store;

-- Sintaxe de comentários

-- CONCAT
SELECT CONCAT (first_name, last_name) FROM sakila.actor;
SELECT CONCAT (first_name, ' ', last_name) FROM sakila.actor;
SELECT CONCAT (first_name, ' ', last_name) AS 'nome completo' FROM sakila.actor;

SELECT CONCAT (title, ' ', release_year) AS 'lançamento do filme' FROM sakila.film;
SELECT CONCAT (title, ' ', rating) AS 'classificação' FROM sakila.film;

SELECT CONCAT (address, ' ', district) AS 'endereço' FROM sakila.address;

-- COUNT

SELECT 
	COUNT(*)
FROM sakila.film
WHERE title = 'ACADEMY DINOSAUR';

-- LIMIT
SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM sakila.rental LIMIT 10;

-- OFFSET
SELECT * FROM sakila.rental LIMIT 10 OFFSET 10;
SELECT * FROM sakila.actor LIMIT 10 OFFSET 4;

-- ORDER BY
SELECT * FROM sakila.address
ORDER BY district ASC, address DESC;

-- Final

SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;

SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
SELECT * FROM sakila.actor ORDER BY last_name ASC, first_name DESC;

SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

SELECT * FROM sakila.film;
SELECT title, release_year, rental_duration, rating, replacement_cost FROM sakila.film ORDER BY rental_duration DESC, replacement_cost ASC;
