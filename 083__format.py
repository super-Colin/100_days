# 3/09/2020

# https://docs.python.org/3/library/functions.html
# https://www.geeksforgeeks.org/python-format-function/

# Python3 program to demonstarte 
# the str.format() method 
  
# print ("{}, A computer science portal for geeks."
#                         .format("GeeksforGeeks")) 

# print ("{}, A computer science portal for geeks.{}"
#                         .format("GeeksforGeeks")) 
    # ^^ Will not work ^^


newString = 'string to test the {} on'
print(newString.format(' format function '))