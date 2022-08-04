"""
Python and PostgreSQL Exercises:
Joyce Zhang
"""
print("--------- Activity A --------- ")
fruitList = []

numFruits = int(input("Enter the number of fruits: "))
for i in range(1, numFruits + 1):
    fruitVal = input("Fruit %s: " %(i))
    fruitList.append(fruitVal)
print("User created a list of %s items and entered the values: %s" %(numFruits, fruitList))

print("--------- Activity B --------- ")
num1 = int(input("Enter number 1: "))
num2 = int(input("Enter number 2: " ))

if num1 < num2:
    for i in range(num1, num2):
        print(i)
elif num1 > num2:
    for i in range(num2, num1):
        print(i)
