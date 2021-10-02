DROP DATABASE IF EXISTS normalization;
CREATE DATABASE normalization;

USE normalization;

CREATE TABLE setores(
    setor_id INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE funcionarios(
    funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60) NOT NULL,
    sobrenome VARCHAR(150) NOT NULL,
    contato VARCHAR(150) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    data_cadastro DATETIME NOT NULL
) ENGINE=InnoDB;

CREATE TABLE funcionario_setor(
    funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    PRIMARY KEY (funcionario_id, setor_id),
    FOREIGN KEY (funcionario_id) REFERENCES funcionarios(funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setores(setor_id)
) ENGINE=InnoDB;

INSERT INTO setores(setor)
VALUES ('Administração'),
        ('Estratégico'),
        ('Marketing'),
        ('Operacional'),
        ('Vendas');

ALTER TABLE funcionarios
AUTO_INCREMENT=12;

INSERT INTO funcionarios(nome, sobrenome, contato, telefone, data_cadastro)
VALUES ('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
        ('André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05'),
        ('Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
        ('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO funcionario_setor(funcionario_id, setor_id)
VALUES (12, 1),
        (12, 5),
        (13, 4),
        (14, 2),
        (14, 5),
        (15, 3);
