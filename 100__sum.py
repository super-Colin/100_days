# 3/25/2020

# https://docs.python.org/3/library/functions.html

numberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]



print(sum(numberList))
# the start argument is actually the amount to count up from,
# not the index of the iterable to start counting from
print(sum(numberList, 1))
print(sum(numberList, 2))
# this is basically (sum (* 2))
print(sum(numberList, sum(numberList)))



