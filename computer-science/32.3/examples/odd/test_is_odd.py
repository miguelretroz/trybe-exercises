from is_odd import is_odd


def test_is_odd_when_number_is_odd_returns_true():
    assert is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    assert is_odd(2) is False
