from bluff import bluff

if __name__ == "__main__":
    player = {
        'Clara': [0, 1, 5, 9, 10],
        'Marco': [0, 2, 8, 9, 10],
    }

    bluff_resut = bluff(player)
    print("Bluff result:", bluff_resut)
