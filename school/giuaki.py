a = int(input("Nhap so nguyen duong chan: "))


def xetSoNT(x):
    count = 0
    for i in range(1, x+1):
        if x%i==0:
            count += 1
    if count == 2:
        return True
    else:
        return False

for i in range (1, int(a/2)+1):
    if xetSoNT(i):
        if xetSoNT(a - i):
            print(i, a-i)