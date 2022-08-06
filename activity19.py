"""
Activity 19: Functions
Joyce Zhang
"""
import math
import random
# Example 8: Pass Statement
def filter_num():
    pass

# Example 7: Boolean Functions
def is_divisible(x,y):
    print("----- EXAMPLE 7 -----")
    if x % y == 0 or y % x == 0:
        return True
    else:
        return False
    
# Example 6: Define function with parameters and return value
def sum(num1, num2):
    total = num1 + num2
    return total

def number():
    print("----- EXAMPLE 6 -----")
    n1 = int(input("Enter number 1: "))
    n2 = int(input("Enter number 2: "))
    x = sum(n1, n2)
    print("The sum of %s and %s is %s" %(n1,n2,x))
         
# Example 5: Defined function with default parameter and no return value
def country(c="Norway"):
    print("----- EXAMPLE 5 -----")
    print("I am from %s" %(c))
    
# Example 4: Defined function with parameter and no return value
def name(fname):
    print("----- EXAMPLE 4 -----")
    print("Welcome to the program: %s" %(fname))
    
# Example 3: Defined function: No parameter nor return value
def my_function():
    print("----- EXAMPLE 3 -----")
    print("Hello from a function!\n")

# Example 2: Random numbers - Randomly pick a color from a list
print("----- EXAMPLE 2 -----")
colors = ['red','blue','green']
randomIndex = random.randint(0,2)
print("The picked color is: %s" %(colors[randomIndex]))

# Example 1: Using built-in function math to calculate the circumference given the radius
print("----- EXAMPLE 1 -----")
radius = float(input("Enter a radius: "))
circumference = 2*math.pi*radius
circumference = round(circumference, 2)
area = math.floor(math.pow(radius,2)*math.pi)
print("The circumference with radius %s is %s and the area is %s" %(radius, circumference, area))


