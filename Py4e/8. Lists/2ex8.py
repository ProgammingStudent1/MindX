fname = input("Enter file name: ")
fh = open(fname)
count = 0

for line in fh:
    if line.startswith('From'):
        if line.startswith('From:'):
            continue
        else:
            wordlist = line.split()
            addr = wordlist[1]
            print(addr)
            count = count + 1
print("There were", count, "lines in the file with From as the first word")
