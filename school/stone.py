stones = []
a = int(input("Input a number: "))
tempCount = a
stones.append(a)
while True:
    if len(stones) < a:
        stones.append(tempCount+2)
        tempCount+=2
    else:
        break
print(stones)
        