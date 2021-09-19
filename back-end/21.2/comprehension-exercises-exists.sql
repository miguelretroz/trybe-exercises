USE hotel;

-- 1. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT
    Id,
    Title
FROM
    Books AS b
WHERE NOT EXISTS (
    SELECT
        book_id
    FROM
        Books_Lent
    WHERE book_id = b.Id
);

-- 2. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT
    Id,
    Title
FROM
    Books AS b
WHERE EXISTS (
    SELECT
        book_id
    FROM
        Books_Lent
    WHERE book_id = b.Id
    AND returned IS FALSE
)
AND Title LIKE '%lost%';

-- 3. Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT
    `Name`
FROM
    Customers AS ct
WHERE NOT EXISTS (
    SELECT
        *
    FROM
        CarSales
    WHERE
        CustomerID = ct.CustomerId
);

-- 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT
    ct.`Name`,
    cars.`Name`
FROM
    Customers AS ct
INNER JOIN Cars as cars
WHERE EXISTS (
    SELECT
        *
    FROM
        CarSales
    WHERE CustomerID = ct.CustomerId
    AND carID = cars.ID
);
