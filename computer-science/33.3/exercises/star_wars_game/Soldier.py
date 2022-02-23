class Soldier:
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 100
