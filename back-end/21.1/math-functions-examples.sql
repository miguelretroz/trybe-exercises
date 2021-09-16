SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

-- DIV
SELECT 10 DIV 3;
SELECT 10 DIV 2;
SELECT 14 DIV 3;
SELECT 13 DIV 2;

-- MOD
SELECT 10 MOD 3;
SELECT 10 MOD 2;
SELECT 14 MOD 3;
SELECT 13 MOD 2;
SELECT 10.5 MOD 2;

-- Desafios com DIV e MOD

-- 1. Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar.
-- Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.
SELECT IF ((15 MOD 2) = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

-- 2. Temos uma sala de cinema que comporta 220 pessoas.
-- Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
SELECT 220 DIV 12 AS 'Qtd grupos';

-- 3. Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando?
-- Se sim, quantos?
SELECT 220 MOD 12 AS 'Lugares sobrando';

-- ROUND
SELECT ROUND(10.4925);
SELECT ROUND(10.5136);
SELECT ROUND(-10.5136);
-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925, 2);
SELECT ROUND(10.4925, 3);

-- CEIL
SELECT CEIL(10.51);
SELECT CEIL(10.49);
SELECT CEIL(10.2);

-- FLOOR
SELECT FLOOR(10.51);
SELECT FLOOR(10.49);
SELECT FLOOR(10.2);

-- POW
SELECT POW(2, 2);
SELECT POW(2, 4);

-- SQRT
SELECT SQRT(9);
SELECT SQRT(16);

-- RAND
-- Gera um valor aleatório entre 0 e 1
SELECT RAND();

-- Para gerar um valor entre 7 e 13
SELECT (7 + (RAND() * 6));