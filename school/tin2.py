a = input("Nhap so: ")
x = 0
y = 0 
sum = 0
for i in a:
    x = x+1

print("So chu so la: ", x)

while True:
    if y == x-1:
        break
    sum += int(a[int(y)])
    y += 1

print("Tong cac chu so la ", sum)