hrs = input("Enter Hours:")
h = float(hrs)
hrRate = input("Enter hourly rate: ")
hR = float(hrRate)
hROver = 1.5 * hR
if h <= 40:
    pay = h * hR
    print(pay)
else:
    pay = 40 * hR + (h-40) * hROver
    print(pay)
    