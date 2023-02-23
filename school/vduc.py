a = int(input("Nhap so a: "))
b = int(input("Nhap so b: "))
c = int(input("Nhap so c: "))

if a+b>=c and a+c>=b and b+c>=a:
    if a==b and b==c:
        print("Tam giac deu")
    elif a==b or b==c or a==c:
        print("Tam giac can")
    elif a**2+b**2==c**2 or b**2+c**2==a**2 or a**2+c**2==b**2:
        print("Tam giac vuong")
    else:
        print("Tam giac thuong")
else:
    print("a, b, c khong phai 3 canh cua 1 tam giac.")