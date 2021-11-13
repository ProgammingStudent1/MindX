score = input("Enter Score: ")
scoreValue = float(score)
if scoreValue > 1.0:
    print("Error")
    quit() 
if scoreValue >= 0.9:
    print("A")
elif scoreValue >= 0.8:
    print("B")
elif scoreValue >= 0.7:
    print("C")
elif scoreValue >= 0.6:
    print("D")
elif scoreValue < 0.6:
    print("F")