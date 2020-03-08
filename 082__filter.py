# 3/08/2020

# https://docs.python.org/3/library/functions.html
# https://www.geeksforgeeks.org/filter-in-python/

numbers = [0,1,2,2,3,3,4,4,55,6,7,8,9]

def filterFunc(inputNum):
    if(inputNum % 2==0):
        return True
    else:
        return False

filtered = filter(filterFunc, numbers)
print(list(filtered))
