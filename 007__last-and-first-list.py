# 12/17/2019
# Learning Python

import random

array1 = random.sample(range(1,30), 12)
array2 = random.sample(range(1,30), 19)


def drop_array_inners(supplied_array):
    result = [supplied_array[0]]
    result.append(supplied_array[len(supplied_array) - 1])
    return result


print(array1)
print(drop_array_inners(array1))

print(array2)
print(drop_array_inners(array2))