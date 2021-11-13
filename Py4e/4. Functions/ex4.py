def computepay(h, r):
   if h <= 40:
        return h * r
   else:
        return 40 * r + (h - 40) * r * 1.5

hrs = input("Enter Hours: ")
rate = input("Enter rate: ")
hValue = float(hrs)
rValue = float(rate)
p = computepay(hValue, rValue)
print("Pay", p)