class DoubleLinkedNode:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.previous = None

    def __str__(self):
        v = self.value
        n = self.next
        p = None
        if self.previous:
            p = self.previous.value
        return f"DoubleLinkedNode(previous={p}, value={v}, next={n})"
