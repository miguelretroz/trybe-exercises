class JediAdapter:
    def __init__(self, jedi):
        self.jedi = jedi

    def attack(self):
        return self.jedi.attackWithSaber()
