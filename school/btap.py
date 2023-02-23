def UCLN(a, b):
    ucln = min(a, b)
    while True:
        if a%ucln==0 and b%ucln==0:
            break
        else:
            ucln -= 1
    return ucln
def UCNN(a, b):
    if UCLN(a, b) == 1:
        return 1
    uoc = 2
    while True:
        if a%uoc==0 and b%uoc==0:
            break
        else:
            uoc += 1
    return uoc
def BCNN(a, b):
    boi = max(a, b)
    while True:
        if boi%a==0 and boi%b==0:
            break
        else:
            boi += 1
    return boi

n = int(input("Nhap so nguyen duong: "))
x = int(input("Nhap so: "))
y = int(input("Nhap so: "))
ucln = UCLN(x,y)
ucnn = UCNN(x,y)
bcnn = BCNN(x,y)

for i in range(0, n-2):
    z = int(input("Nhap so: "))
    ucln = UCLN(ucln, z)
    ucnn = UCNN(ucnn, z)
    bcnn = BCNN(bcnn, z)

print("Uoc chung lon nhat la:", ucln)
print("Uoc chung nho nhat la:", ucnn)
print("Boi chung nho nhat la:", bcnn)
