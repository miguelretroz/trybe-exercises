import json

with open("pokemons.json") as file:
    # content = file.read()
    # pokemons = json.loads(content)["results"]
    pokemons = json.load(file)["results"]

print(pokemons[0])
