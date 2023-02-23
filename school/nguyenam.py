wordList = ["hello", "potter", "messi"]
nguyenam = ["a", "e", "i", "o", "u"]

for word in wordList:
    count = 0
    lst = list(word)
    while count < len(lst):
        if lst[count] in nguyenam:
            lst[count] = "*"
        count += 1
    print(''.join(lst))

        