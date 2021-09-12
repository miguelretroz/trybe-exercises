USE PiecesProviders;

SELECT Piece, Price FROM Provides;

SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;

SELECT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4 OFFSET 3;

SELECT
	*
FROM
	Provides
WHERE Provider = 'HAL'
ORDER BY Price DESC;