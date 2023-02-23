number = int(input("Nhap so N: "))
count = 0
count2 = number
while True:
    if number%count2 == 0:
        count += 1
    if count2 == 1:
        if count > 2:
            print("N khong phai so nguyen to")
            break
        else:
            print("N la so nguyen to")
            break
    count2 -= 1