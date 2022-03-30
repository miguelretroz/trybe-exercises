import subprocess
import re

print("\n")


cpu_infos = str(subprocess.check_output("lscpu")).split("\\n")
print("--CPU Infos--")
print(cpu_infos[12])
print(cpu_infos[4])
print(cpu_infos[14])
print(cpu_infos[19])
print(cpu_infos[21])
print(cpu_infos[22])
print("\n")

mem_infos = re.findall("\S[\w:]*", str(subprocess.check_output("free")))
print("--Memory Infos--")
print(f"Total: {round((int(mem_infos[10]) / 1024), 2)}MB")
print(f"Used: {round((int(mem_infos[11]) / 1024), 2)}MB")
print(f"Free: {round((int(mem_infos[12]) / 1024), 2)}MB")
