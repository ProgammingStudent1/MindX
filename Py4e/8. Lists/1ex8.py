fname = input("Enter file name: ")
fh = open(fname)
lst = list()
for line in fh:
    a = line.rstrip()
    x = a.split()
    for word in x:
        if word not in lst:
            lst.append(word)
        else:
            continue
lst.sort()
print(lst)


