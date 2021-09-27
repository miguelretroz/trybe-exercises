CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;

CREATE TABLE artista(
    artista_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE estilo_musical(
    estilo_musical_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE album(
    album_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    preco DECIMAL(19, 2) DEFAULT 0,
    estilo_musical_id INT NOT NULL,
    artista_id INT NOT NULL,
    FOREIGN KEY (estilo_musical_id) REFERENCES estilo_musical(estilo_musical_id),
    FOREIGN KEY (artista_id) REFERENCES artista(artista_id)
) ENGINE=InnoDB;

CREATE TABLE cancao(
    cancao_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    album_id INT NOT NULL,
    FOREIGN KEY (album_id) REFERENCES album(album_id)
) ENGINE=InnoDB;

INSERT INTO artista(nome)
VALUES ('Supercombo');

INSERT INTO estilo_musical(nome)
VALUES ('Rock');

INSERT INTO album(titulo, estilo_musical_id, artista_id)
VALUES ('Amianto', 1, 1);

SELECT
    *
FROM
    album;
