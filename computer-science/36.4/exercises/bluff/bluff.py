def bluff(numbers_of_players):
    players_names = list(numbers_of_players.keys())
    player_one_name = players_names[0]
    player_two_name = players_names[1]

    player_one_numbers_set = set(numbers_of_players[player_one_name])
    player_two_numbers_set = set(numbers_of_players[player_two_name])

    player_one_rest = player_one_numbers_set.difference(player_two_numbers_set)
    player_two_rest = player_two_numbers_set.difference(player_one_numbers_set)

    player_one_pt = max(player_one_rest) - min(player_one_rest)
    player_two_pt = max(player_two_rest) - min(player_two_rest)

    if player_one_pt == player_two_pt:
        return "Empate"

    if player_one_pt > player_two_pt:
        return player_one_name

    return player_two_name
