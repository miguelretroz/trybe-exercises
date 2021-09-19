USE hr;

-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT
    MAX(SALARY)
FROM
    employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT
    MAX(SALARY),
    MIN(SALARY)
FROM
    employees;