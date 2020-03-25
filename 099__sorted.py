# 3/23/2020

# https://docs.python.org/3/library/functions.html



newList = [8,9,101,2,3,4,5,6,7,16,17,4,12,13,14,15,18]


print(sorted(newList))
# These will not work
# print(newList.sort())
# print(newList.sorted())

# sort() modifies the list "in-place" so it alters the original list
newList.sort()
print(newList)
# 