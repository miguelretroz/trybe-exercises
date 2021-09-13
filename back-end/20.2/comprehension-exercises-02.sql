CREATE DATABASE `escola`;
CREATE TABLE IF NOT EXISTS escola.alunos (
	`nome` VARCHAR(7) CHARACTER SET utf8,
    `idade` INT
);
INSERT INTO escola.alunos VALUES
	('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
    
USE escola;

SELECT DISTINCT nome, idade FROM alunos;
SELECT DISTINCT nome FROM alunos;
SELECT DISTINCT idade FROM alunos;