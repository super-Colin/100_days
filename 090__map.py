# 3/15/2020

# https://docs.python.org/3/library/functions.html
# https://www.geeksforgeeks.org/python-map-function/
  
# Return double of n 
def addition(n): 
    return ((n * 7) % 6 ) + n
  
# We double all numbers using map() 
numbers = (1, 2, 3, 4) 
result = map(addition, numbers) 
print(list(result)) 

