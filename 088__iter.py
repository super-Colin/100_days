# 3/13/2020

# https://docs.python.org/3/library/functions.html
# https://www.programiz.com/python-programming/methods/built-in/iter

# list of vowels
vowels = ['a', 'e', 'i', 'o', 'u']
vowels_iter = iter(vowels)

print(next(vowels_iter))    # 'a'
print(next(vowels_iter))    # 'e'
print(next(vowels_iter))    # 'i'
print(next(vowels_iter))    # 'o'
print(next(vowels_iter))    # 'u'
print(next(vowels_iter))    # what next? (will break here at the end of iter)
# print(next(vowels_iter))    
# print(next(vowels_iter))    

# Also learned about next() with this 
