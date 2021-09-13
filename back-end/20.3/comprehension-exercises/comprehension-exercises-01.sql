USE sakila;

SELECT
	*
FROM
	customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT
	first_name
FROM
	customer
WHERE active IS FALSE
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name ASC;

SELECT
	title, description, release_year, replacement_cost
FROM
	film
WHERE replacement_cost >= 18
AND (
rating  = 'G'
OR rating = 'PG'
OR rating = 'PG-13'
)
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;

SELECT
	COUNT(*)
FROM
	customer
WHERE active IS TRUE
AND store_id = 1;
