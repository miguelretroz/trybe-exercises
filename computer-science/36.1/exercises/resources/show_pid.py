import os
import subprocess
from time import sleep

pid = os.getpid()
process_infos = str(
    subprocess.check_output(
        f"ps {pid}",
        shell=True,
    )
).split("\\n")[1]

print(f"pid: {pid}")
print(f"process infos: {process_infos}")

sleep(20)
