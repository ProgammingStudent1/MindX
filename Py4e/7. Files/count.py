name = input("Enter file name: ")
char = input("Count letter: ")
file = open(name)
charCount = 0
for line in file:
    for word in line:
        if word == char.upper() or word == char.lower():
            charCount = charCount + 1
print(charCount)

