class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        try:
            return self.loaded_memory[int(index)]
        except (ValueError, IndexError):
            return 0

    def clean(self):
        self.loaded_memory = []
