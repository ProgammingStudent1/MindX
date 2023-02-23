sonhapvao = int(input("Xet so doi xung: "))
if sonhapvao <= 10**9:
    a = str(sonhapvao)
i = 0
y = 0
b = None

for x in a:
    i += 1

while True:
    if a[y] == a[i-1]:
        y+=1
        i-=1
        if i==0:
            print("So la so doi xung")
            break
    else:
        print("So khong doi xung")
        break
    
