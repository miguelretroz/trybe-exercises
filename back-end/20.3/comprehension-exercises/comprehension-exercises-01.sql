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