import subprocess
from time import sleep
import re


def show_memory():
    mem_infos = re.findall("\S[\w:]*", str(subprocess.check_output("free")))
    print(f"Total: {round(int(mem_infos[10]) / 1024)}")
    print(f"Used: {round(int(mem_infos[11]) / 1024)}")

    sleep(1)

    show_memory()


show_memory()
