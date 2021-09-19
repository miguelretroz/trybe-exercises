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

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT
    JOB_ID,
    AVG(SALARY) SALARY_AVG
FROM
    employees
GROUP BY
    JOB_ID
ORDER BY
    SALARY_AVG DESC;