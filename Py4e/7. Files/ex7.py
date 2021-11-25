fname = input("Enter file name: ")
fh = open(fname)
count = 0
x = 0
for line in fh:
    if not line.startswith("X-DSPAM-Confidence:"):
        continue
    count = count + 1
    numPos = line.find(':')
    num = line[(numPos+1):]
    finalNum = num.lstrip()
    numValue = float(finalNum)
    x = x + numValue

result = x / count
print('Average spam confidence:', result)
print("Done")