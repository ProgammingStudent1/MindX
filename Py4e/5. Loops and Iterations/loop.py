while True:
    a = input('>> ')
    if a == 'stop':
        print('Goodbye')
        break
    print(a)

largest = -1
for i in [4, 7, 3, 9, 22]:
    if i > largest:
        largest = i 
print(largest)
    