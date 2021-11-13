largest = None
smallest = None
count = 0
while True:
    num = input("Enter a number: ")
    if num == "done":
        break
    try:
        count = count + 1
        value = int(num)
        if count == 1:
            largest = value
            smallest = value
        if largest < value:
            largest = value
        if smallest > value:
            smallest = value
    except:
        print('Invalid input')

print("Maximum is", largest)
print("Minimum is", smallest)
