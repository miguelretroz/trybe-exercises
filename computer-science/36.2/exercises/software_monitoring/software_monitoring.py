def longer_stable_time(states):
    longer_time = 0
    time_counter = 0

    for state in states:
        if state:
            time_counter += 1
            if time_counter > longer_time:
                longer_time = time_counter
        else:
            time_counter = 0

    return longer_time


print(longer_stable_time([0, 1, 1, 1, 0, 0, 1, 1]))
print(longer_stable_time([1, 1, 1, 1, 0, 0, 1, 1]))
