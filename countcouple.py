a = 1
b = 1
n = int(input("Nhap so n: "))
count = 0
while True:
    if b<=a and a%b == 0 and a<=n:
        count+=1
        a+=1
    elif a%b==0 and b<=n:
        count+=1
        b+=1
    else:
        break
print(count)
