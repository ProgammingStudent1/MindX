count = 0 
sumle = 0
sumchan = 0
a = int(input("Nhap so: "))
while a > 0:
    if a%2 != 0:
        sumle += a
    else:
        sumchan += a
        count += 1
    a = int(input("Nhap so: "))
print("Tong cac so le la: ", sumle)
print("Trung binh cong cua cac so chan la: ", sumchan/count)