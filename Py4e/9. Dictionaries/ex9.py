fname = input("Enter file name: ")
fh = open(fname)
senders = dict()
largest = 0
for line in fh:
    if line.startswith('From'):
        if line.startswith('From:'):
            continue
        else:
            wordlist = line.split()
            addr = wordlist[1]
            senders[addr] = senders.get(addr, 0) + 1
for name, time in senders.items():
    if time >= largest:
        largest = time
for items in senders:
    if senders[items] == largest:
        print(items, senders[items])
        break
