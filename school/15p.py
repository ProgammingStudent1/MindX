count = 0 
sum = 0
a = int(input("Nhap so: "))
while a != 0:
    if a%2 == 0:
        sum += a
        count += 1
    a = int(input("Nhap so: "))
print("Tong cac so chan la: ", sum)
print("Trung binh cong cua cac so chan la: ", sum/count)