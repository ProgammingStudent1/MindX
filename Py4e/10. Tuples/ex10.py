name = input("Enter file name: ")
handle = open(name)
hourList = dict()
for line in handle:
    if line.startswith('From'):
        if line.startswith('From:'):
            continue
        else:
            wordlist = line.split()
            time = wordlist[5]
            hours = time[:2]
            hourList[hours] = hourList.get(hours, 0) + 1
for hour, count in sorted(hourList.items()):
    print(hour, count)

