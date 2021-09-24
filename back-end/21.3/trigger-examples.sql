-- Trigger para o INSERT
USE rede_social;

DELIMITER $$

CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END $$

DELIMITER ;

INSERT INTO perfil(saldo) VALUES (2500);

SELECT * FROM perfil;

-- Trigger para o UPDATE
USE rede_social;

DELIMITER $$

CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'UPDATE';
END $$

DELIMITER ;

UPDATE perfil
SET saldo = 3000
WHERE perfil_id = 1;

SELECT * FROM perfil;

-- Trigger para DELETE
USE rede_social;

DELIMITER $$

CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON perfil
    FOR EACH ROW
BEGIN
    INSERT INTO log_perfil(acao, data_acao)
    VALUES ('DELETE', NOW());
END $$

DELIMITER ;

DELETE FROM perfil
WHERE perfil_id =1;

SELECT
    *
FROM
    log_perfil;
