from time import perf_counter

from main_memory import MainMemory
from secondary_memory import SecondaryMemory

main = MainMemory()
secondary = SecondaryMemory()

RANDOM_NUMBERS = ["36912", "84300"] * 100


def timer(string, initial_time):
    print(string)
    print(f"Tempo para a tarefa terminar: {perf_counter() - initial_time:6f}")


main_load_initial_time = perf_counter()
for number in RANDOM_NUMBERS:
    main.load(number)
timer("Números carregados na memória principal", main_load_initial_time)

main_get_initial_time = perf_counter()
main_sum = sum([main.get(i) for i in range(len(RANDOM_NUMBERS))])
timer(f"Soma na memória principal: {main_sum}", main_get_initial_time)

main_clean_initial_time = perf_counter()
main.clean()
timer("Clean na mémoria principal", main_clean_initial_time)


secondary_load_initial_time = perf_counter()
for number in RANDOM_NUMBERS:
    secondary.load(number)
timer("Números carregados na memória secundária", secondary_load_initial_time)

secondary_get_initial_time = perf_counter()
secondary_sum = sum([secondary.get(i) for i in range(len(RANDOM_NUMBERS))])
timer(
    f"Soma na memória secundária: {secondary_sum}",
    secondary_get_initial_time,
)

secondary_clean_initial_time = perf_counter()
secondary.clean()
timer("Clean na memória secundária", secondary_clean_initial_time)
