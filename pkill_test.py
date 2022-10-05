from distutils.spawn import spawn
from time import sleep
import subprocess
from os import kill

nodeProc= subprocess.Popen(["node","wobble_mock.js"])
try:
    for x in range(100):
        print(f'python {x}')
        sleep(0.25)
except KeyboardInterrupt:
    print("ok")
    for x in range(10):
        sleep(0.25)
        print(x)
finally:
    kill(nodeProc.pid, 2)
    print("gracefully finished, good bye")