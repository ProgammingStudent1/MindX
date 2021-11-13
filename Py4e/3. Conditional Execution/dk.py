inputHeight = input("Enter your height (meters): ")
inputWeight = input("Enter your weight (kg): ")
height = float(inputHeight)
weight = float(inputWeight)
bmi = float(weight / height**2) 
if bmi < 18:
    print("Underweight/Malnutrition")
elif 18 <= bmi < 24:
    print("Healthy")
elif 24 <= bmi < 29:
    print("Overweight")
elif 29 <= bmi < 39:
    print("Obese")
elif 39 <= bmi:
    print("Extremely Obese")