from Jedi import Jedi
from JediAdapter import JediAdapter
from Soldier import Soldier
from StarWarsGame import StarWarsGame

print(StarWarsGame)

StarWarsGame(Soldier(5)).fight_enemy()
StarWarsGame(JediAdapter(Jedi(20))).fight_enemy()
