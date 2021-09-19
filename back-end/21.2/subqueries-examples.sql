-- SUBQUERY como fonte para o FROM
SELECT
    f.title,
    f.rating
FROM (
    SELECT
        *
    FROM
        sakila.film
    WHERE
        rating = 'R'
) AS f;

-- SUBQUERY como coluna
SELECT
    address,
    district,
    (
        SELECT
            city
        FROM
            sakila.city
        WHERE
            city.city_id = sakila.address.city_id
    ) AS city
FROM
    sakila.address;

-- Filtrando usando o resultado da SUBQUERY
SELECT
    address,
    district
FROM
    sakila.address
WHERE
    city_id in (
        SELECT
            city_id
        FROM
            sakila.city
        WHERE
            city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
    );
    
-- Tabela de fora dentro da SUBQUERY
SELECT
    first_name,
    (
        SELECT
            address
        FROM
            sakila.address
        WHERE
            address.address_id = external_table.address_id
    ) AS address
FROM
    sakila.customer AS external_table;
